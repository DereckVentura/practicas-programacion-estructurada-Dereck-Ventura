/*
 // Objetos
const persona = {
    nombre: "Dereck",
    edad: 18,
    profesion: "Instructor",
    saludar: function(){
        console.log("Hola, soy " + this.nombre)
    }
}

persona.saludar();

//Objetos anidados
const universidad = {
    nombre: "UNIVO",
    ubicacion: {
        ciudad: "La Union",
        pais: "El Salvador"
    },
    facultades: {
        ingenieriaYarquitectura: {
            carreras: ["Ingeniería en desarrollo de software", "Industrial", "Arquitectura"],
        }
    }
}

*/

/* EJERCICIOS DE CLASE */
const estudiante = {
    nombre: "Dereck",
    edad: 18,
    contacto: {
        email: "correofalso@correo.com",
        telefono: "7856-4945"
    },
    materias: ["Programacion I", "Matematica II", "Realidad nacional", "Fisica", "Estadistica"],
    saludar: function() {
        console.log("Hola, me llamo " + this.nombre + " y llevo la materia de " + this.materias[0])
    }
}

estudiante.saludar()

// Ejercicio 2
const tienda = {
    nombre: "Tienda del campo",
    productos: {
        campo: {
            nombre: "carton de huevos",
            stock: 5,
            precio: 7.5
        },
        celulares: {
            nombre: "Samsung s24+",
            stock: 10,
            precio: 450
        }
    }
}

console.log("\n\n\nNombre del producto: ", tienda.productos.celulares.nombre)
console.log("Precio del producto: $", tienda.productos.celulares.precio)
console.log("cantidad de stock restante: ", tienda.productos.celulares.stock - 1)