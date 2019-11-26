const assert=require('chai').assert;

var expect  = require('chai').expect;
// var request = require('request');
var supertest = require('supertest');

var server = supertest.agent('http://localhost:4000');
describe('Test cases for Blood Bank application - BloodAvailability', () => {

describe('Check Blood Availability for A Negative', () => { 
        it('return the total available blood for A-', function(done) {
            server.get('/bloodavailabilityAneg')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200) //expecting HTTP status code
            .expect('[{"qty":1000}]') // expecting content value
            .end(function(err,res) {
                done(err);
            });
        })
    });
    describe('Check Blood Availability for A Positive', () => { 
        it('return the total available blood for A+', function(done) {
            server.get('/bloodavailabilityApos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200) //expecting HTTP status code
            .expect('[{"qty":2000}]') // expecting content value
            .end(function(err,res) {
                done(err);
            });
        })
    });
    describe('Check Blood Availability for B Negative', () => { 
        it('return the total available blood for B-', function(done) {
            server.get('/bloodavailabilityBneg')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200) //expecting HTTP status code
            .expect('[{"qty":1600}]') // expecting content value
            .end(function(err,res) {
                done(err);
            });
        })
    });
    describe('Check Blood Availability for B Positive', () => { 
        it('return the total available blood for B+', function(done) {
            server.get('/bloodavailabilityBpos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200) //expecting HTTP status code
            .expect('[{"qty":2400}]') // expecting content value
            .end(function(err,res) {
                done(err);
            });
        })
    });
    describe('Check Blood Availability for O Negative', () => { 
        it('return the total available blood for O-', function(done) {
            server.get('/bloodavailabilityOneg')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200) //expecting HTTP status code
            .expect('[{"qty":200}]') // expecting content value
            .end(function(err,res) {
                done(err);
            });
        })
    });
    describe('Check Blood Availability for O Positive', () => { 
        it('return the total available blood for O+', function(done) {
            server.get('/bloodavailabilityOpos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200) //expecting HTTP status code
            .expect('[{"qty":600}]') // expecting content value
            .end(function(err,res) {
                done(err);
            });
        })
    });
    describe('Check Blood Availability for AB Negative', () => { 
        it('return the total available blood for AB-', function(done) {
            server.get('/bloodavailabilityABneg')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200) //expecting HTTP status code
            .expect('[{"qty":400}]') // expecting content value
            .end(function(err,res) {
                done(err);
            });
        })
    });
    describe('Check Blood Availability for AB Positive', () => { 
        it('return the total available blood for AB+', function(done) {
            server.get('/bloodavailabilityABpos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200) //expecting HTTP status code
            .expect('[{"qty":1200}]') // expecting content value
            .end(function(err,res) {
                done(err);
            });
        })
    });
});