from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
@app.route('/home')
def home():
    return render_template('Home.html')

@app.route('/about')
def about():
    return render_template('aboutMe.html')


if __name__ == '__main__':
    app.run()
