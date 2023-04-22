from flask import request,json,jsonify,url_for,redirect,send_from_directory
from app import app
from flask_marshmallow import Marshmallow
from app import db

@app.route('/display/<filename>')
def display(filename):
    return redirect(url_for('static/', filename='uploads/' + filename), code=301)
