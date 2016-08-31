import re
from flask import Flask, request, make_response, render_template
from werkzeug.routing import Rule, Map, BaseConverter, ValidationError
app = Flask(__name__)

@app.route('/')
def index():
   return render_template('index.html')

@app.route('/splitscreen')
def splitscreen():
   return render_template('splitscreen.html')

@app.route('/<session_id>')
def index_session_id(session_id):
   return render_template('follower_side.html')

@app.route('/share')
def popup_link():
   return render_template('share.html')


