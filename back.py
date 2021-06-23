import sqlite3
from flask import Flask, render_template, request, redirect, url_for, flash
from flask.wrappers import Request


app = Flask(__name__)
 
#setttings
app.secret_key = 'mysecretkey'

@app.route('/')
def Index():
    return render_template('index.html')

@app.route('/Catalogo')
def Catalogo():
  return render_template('Catalogo.html')


@app.route('/contacto')
def Contacto():
  conn = sqlite3.connect('moam.db')
  cur = conn.cursor()
  sql= "SELECT * FROM clientes"
  cur.execute(sql)
  data = cur.fetchall()
  conn.commit()
  conn.close()
  return render_template('Contacto.html', clientes = data)

@app.route('/add_cliente', methods = ['POST'])
def add_cliente():
  if request.method == 'POST':
    nombre =  request.form['nombre']
    apellidos = request.form['apellido']
    telefono = request.form['telefono']
    email = request.form['e-mail']
    conn = sqlite3.connect('moam.db')
    cur = conn.cursor()
    sql = "INSERT INTO clientes (nombre, apellidos, telefono, mail) VALUES (?,?,?,?)"
    cur.execute(sql,(nombre, apellidos, telefono, email))
    conn.commit()
    conn.close()
    flash('Cliente agregado')
  return redirect(url_for('Contacto'))
   
@app.route('/edit/<id>') 
def get_cliente(id):
  conn = sqlite3.connect('moam.db')
  cur = conn.cursor()
  sql = "SELECT * FROM clientes WHERE id_cliente =  ?"
  cur.execute(sql, (id))
  data = cur.fetchall()
  conn.commit()
  cur.close()
  return render_template('edit_cliente.html', cliente = data[0])

@app.route('/update/<id>', methods = ['POST'])
def update_cleinte(id):
  if request.method == 'POST':
   nombre = request.form['nombre']
   apellidos = request.form['apellido']
   telefono = request.form['telefono']
   email = request.form['e-mail']
   conn = sqlite3.connect('moam.db')
   cur = conn.cursor()
   sql = " UPDATE clientes SET nombre = ?, apellidos = ?, telefono = ?, mail = ? WHERE id_cliente = ?"
   cur.execute(sql, (nombre, apellidos, telefono,email,id) )
   conn.commit()
   cur.close()
   flash('Cliente Actualizado')
   return redirect(url_for('Contacto'))

@app.route('/eliminar/<string:id>') 
def elim_cliente(id):
   conn = sqlite3.connect('moam.db')
   cur = conn.cursor()
   sql = "DELETE FROM clientes WHERE id_cliente ="+id
   cur.execute(sql)
   conn.commit()
   cur.close()
   flash('Cliente eliminado')
   return redirect(url_for('Contacto'))

if __name__ == '__main__': 
  app.run(port = 3000, debug = True)