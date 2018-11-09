import random
from flask import Flask, jsonify, render_template
app = Flask(__name__)


def randomTxt():
    with open("sentences.txt") as fp:
        lines = fp.read().splitlines()
        random_line = random.choice(lines).strip("\n")
    return random_line

@app.route("/")
def output():
    resp = randomTxt()
    return render_template('hangman.html', passwd=resp)


if __name__ == '__main__':
    app.run(debug=True)