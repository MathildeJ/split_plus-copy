import re
from flask import Flask, request, make_response, render_template
from werkzeug.routing import Rule, Map, BaseConverter, ValidationError
app = Flask(__name__)

class RegexConverter(BaseConverter):
    def __init__(self, url_map, *items):
        super(RegexConverter, self).__init__(url_map)
        self.regex = items[0]


app.url_map.converters['regex'] = RegexConverter

@app.route('/')
def index():
   return render_template('index.html')

@app.route('/splitscreen')
def splitscreen():
   return render_template('splitscreen.html')

@app.route('/<regex("[0-9]{3}[-][0-9]{3}[-][0-9]{3}"):session_id>/')
def index_session_id(session_id):
   return render_template('follower_side.html')

@app.route('/share')
def popup_link():
   return render_template('share.html')


