# declare our python lib imports
import os
import json
from flask import Flask, request, Response, render_template, send_from_directory

# create our Flask app object
app = Flask(__name__)

# load our configuration from settings.py
app.config.from_object('settings')

app.url_map.strict_slashes = False

# define the default index route
@app.route('/')
def index(**kwargs):
    return render_template('index.html')

# special handler for favicon
@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/x-icon')

# define error handler for a 404
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

# run our server!
if __name__ == '__main__':
    app.run()
