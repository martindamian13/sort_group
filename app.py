from flask import Flask, render_template
import sqlite3
import json
from flask import jsonify

app = Flask(__name__)

# Convierte los datos de la database en diccionario
def row_to_dict(cursor: sqlite3.Cursor, row: sqlite3.Row) -> dict:
    data = {}
    for idx, col in enumerate(cursor.description):
        data[col[0]] = row[idx]
    return data

#Recibimos la base de datos como diccionario y convertimos a json
def recibir_json():
    with sqlite3.connect("database.db") as con: #Crea un objeto de conexion
        con.row_factory = row_to_dict # Forma avanzada de obtener resultados
        consulta = con.execute('SELECT * FROM gente') #Ejecuta una consulta
        resultado = consulta.fetchall() # Obtiene los resulados (diccionario) de la consulta en una lista
        return resultado #Retorna la lista


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data')
def api():
    response = recibir_json()
    return jsonify(response) #Retorna el diccionario en una lista de la base de datos en formato json

if __name__=='__main__':
    app.run(host='0.0.0.0', port=1000, debug=True)
