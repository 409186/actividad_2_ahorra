const array = [
    {
        "aseguradora": "AFIRME",
        "cotizacion": {
            "cliente": {
                "tipoPersona": "fisica",
                "nombre": "prueba",
                "apellidoPat": "prueba",
                "apellidoMat": "prueba",
                "rfc": "",
                "fechaNacimiento": "01-01-2005",
                "ocupacion": "",
                "curp": "",
                "direccion": {
                    "calle": "oriente 945",
                    "noExt": "410",
                    "noInt": "021",
                    "colonia": "prueba",
                    "codPostal": "56618",
                    "poblacion": "mexico",
                    "ciudad": "cdmx",
                    "pais": "mexico"
                },
                "edad": "18",
                "genero": "MASCULINO",
                "telefono": "",
                "email": ""
            }
        }
    }
]

const array2 = array.map((obj) => ({...obj}))
array2[0]['aseguradora'] = 'MAPFRE'
array2[0]['cotizacion']['cliente']['tipoPersona'] = 'moral'
array2[0]['cotizacion']['cliente']['nombre'] = 'Alfonso'
array2[0]['cotizacion']['cliente']['apellidoPat'] = 'Cano'
array2[0]['cotizacion']['cliente']['apellidoMat'] = 'Ruiz'
array2[0]['cotizacion']['cliente']['edad'] = '28'
array2[0]['cotizacion']['cliente']['ocupacion'] = 'Desarrollador'
array2[0]['cotizacion']['cliente']['email'] = 'desarrolladorweb@gmail.com'
array2[0]['cotizacion']['cliente']['telefono'] = '5510338967'

console.log("1", array)
console.log("2", array2)