var request = require('request');
var SSH2Shell = require ('ssh2shell');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var moment = require('moment');

var transporter = nodemailer.createTransport(smtpTransport({
    host: 'EMAIL_HOST',
    secureConnection: true,
    tls: {
        rejectUnauthorized: false
    },
    port: 465,
    auth: {
        user: 'email@domain.com',
        pass: '*********'
    }
}));

var mailOptions = {
    from: 'Sender <email@domain.com>',
    to: 'Receiver <email@domain.com>',
    subject: 'Jenkins Restarted ' + moment().format('dddd, MMMM Do YYYY, h:mm:ss a'),
    text: 'no-message',
    html: 'no-message'
};

request('JENKINS_URL', function (error, response, body) {
    if (error) {
        var host = {
            server: {
                host: 'JENKINS_HOST',
                userName: 'JENKINS_HOST_USERNAME',
                password: 'JENKINS_HOST_PASSWORD',
            },
            commands: [
                'service jenkins restart',
            ],
            onCommandComplete: function (command, response, sshObj) {
                transporter.sendMail(mailOptions, function(error, info){});
            }
        };

        SSH = new SSH2Shell(host);
         
        SSH.connect();
    }
});
