const assert=require('chai').assert;

var expect  = require('chai').expect;
// var request = require('request');
var supertest = require('supertest');

var server = supertest.agent('http://localhost:4000');
describe('Test cases for Blood Bank application - Login', () => {
    describe('Correct login credentials Scenario', () => {
        it('User will able to login the application', function(done) {
        server.post('/auth')  
        .send({
            hospitalId: '123',
            password: 'aaa',
            done: false
        })
        .expect(302) //302 because it is redirecting to different page
        .end(function(err, res) {
            done(err);
        });
        });
    });
    describe('Incorrect login credentials Scenario', () => {
        it('User will not able to login the application as the user is not present in the db', function(done) {
        server.post('/auth')  
        .send({
            hospitalId: '2929',
            password: '2929',
            done: false
        })
        .expect(404)
        .end(function(err, res) {
            done(err);
        });
        });
    });
    describe('check /home path', () => {
        it('validating /home get method', function(done) {
        server.get('/home')  
        .expect(200)
        .end(function(err, res) {
            done(err);
        });
        });
    });
});