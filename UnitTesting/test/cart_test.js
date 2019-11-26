const assert=require('chai').assert;

var expect  = require('chai').expect;
// var request = require('request');
var supertest = require('supertest');

var server = supertest.agent('http://localhost:3000');
describe('Test cases for Blood Bank application - Cart', () => {

describe('Remove Blood From A+', () => { 
    it('RemoveAPos', function(done) {
        server.post('/removeBloodAPos')
        .send({
            removeQty: '10',
            done: false
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200) //expecting HTTP status code
        .expect('"Blood Quantity has been updated successfully"') // expecting content value
        .end(function(err,res) {
            done(err);
        });
    })
});
describe('Remove Blood From A-', () => { 
    it('RemoveAPos', function(done) {
        server.post('/removeBloodANeg')
        .send({
            removeQty: '10',
            done: false
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200) //expecting HTTP status code
        .expect('"Blood Quantity has been updated successfully"') // expecting content value
        .end(function(err,res) {
            done(err);
        });
    })
});
describe('Remove Blood From B+', () => { 
    it('RemoveAPos', function(done) {
        server.post('/removeBloodBPos')
        .send({
            removeQty: '10',
            done: false
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200) //expecting HTTP status code
        .expect('"Blood Quantity has been updated successfully"') // expecting content value
        .end(function(err,res) {
            done(err);
        });
    })
});
describe('Remove Blood From B-', () => { 
    it('RemoveAPos', function(done) {
        server.post('/removeBloodBNeg')
        .send({
            removeQty: '10',
            done: false
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200) //expecting HTTP status code
        .expect('"Blood Quantity has been updated successfully"') // expecting content value
        .end(function(err,res) {
            done(err);
        });
    })
});
describe('Remove Blood From O+', () => { 
    it('RemoveAPos', function(done) {
        server.post('/removeBloodOPos')
        .send({
            removeQty: '10',
            done: false
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200) //expecting HTTP status code
        .expect('"Blood Quantity has been updated successfully"') // expecting content value
        .end(function(err,res) {
            done(err);
        });
    })
});
describe('Remove Blood From O-', () => { 
    it('RemoveAPos', function(done) {
        server.post('/removeBloodONeg')
        .send({
            removeQty: '10',
            done: false
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200) //expecting HTTP status code
        .expect('"Blood Quantity has been updated successfully"') // expecting content value
        .end(function(err,res) {
            done(err);
        });
    })
});
describe('Remove Blood From AB+', () => { 
    it('RemoveAPos', function(done) {
        server.post('/removeBloodABPos')
        .send({
            removeQty: '10',
            done: false
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200) //expecting HTTP status code
        .expect('"Blood Quantity has been updated successfully"') // expecting content value
        .end(function(err,res) {
            done(err);
        });
    })
});
describe('Remove Blood From AB-', () => { 
    it('RemoveAPos', function(done) {
        server.post('/removeBloodABNeg')
        .send({
            removeQty: '10',
            done: false
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200) //expecting HTTP status code
        .expect('"Blood Quantity has been updated successfully"') // expecting content value
        .end(function(err,res) {
            done(err);
        });
    })
});
describe('Place Order', () => { 
    it('Place Order', function(done) {
        server.post('/placeOrder')
        .send({
            hospitalId: '123',
            BloodGroup: 'A+',
            qty: '10',
            urgency: 'Very Urgent',
            done: false
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200) //expecting HTTP status code
        .expect('"Order has been placed successfully"') // expecting content value
        .end(function(err,res) {
            done(err);
        });
    })
});
});