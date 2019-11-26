const assert=require('chai').assert;

var expect  = require('chai').expect;
// var request = require('request');
var supertest = require('supertest');

var server = supertest.agent('http://localhost:4000');

describe('Test cases for Blood Bank application - Signup', () => {
describe('Hospital ID Validation - Positive Scenario', () => {
    it('Scenario when hospital ID is not present in the database', function(done) {
    server.post('/checkHospitalID')  
    .send({
        hospitalId: '2929',
        done: false
    })
    .expect(302)
    .end(function(err, res) {
        done(err);
    });
    });
});
describe('Hospital ID Validation - Negative Scenario', () => {
    it('Scenario when hospital ID is already present in the database', function(done) {
    server.post('/checkHospitalID')  
    .send({
        hospitalId: '123',
        done: false
    })
    .expect(404)
    .end(function(err, res) {
        done(err);
    });
    });
});
describe('Signup Positive Scenario', () => { 
    it('Signup Positive Scenario', function(done) {
        server.post('/signup')
        .send({
            hospitalName: 'asda',
            address:'asd',
            city:'asd',
            state:'asd',
            zipcode:'123',
            hospitalId: '123331',
            password: 'aaa',
            done: false
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200) //expecting HTTP status code
        .expect('"Your account has been registered."') // expecting content value
        .end(function(err,res) {
            done(err);
        });
    })
});
describe('Signup Negative Scenario', () => { 
    it('Signup Negative Scenario', function(done) {
        server.post('/signup')
        .send({
            hospitalName: '',
            address:'asd',
            city:'asd',
            state:'asd',
            zipcode:'123',
            hospitalId: '123331',
            password: 'aaa',
            done: false
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200) //expecting HTTP status code
        .expect('"Please enter the details!"') // expecting content value
        .end(function(err,res) {
            done(err);
        });
    })
});
});