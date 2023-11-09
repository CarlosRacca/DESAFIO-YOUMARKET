# DESAFIO-YOUMARKET
Creación de un algoritmo para ayudar al Dr. Mendel a avanzar con su investigación

# Enunciado
El laboratorio de Gregor Mendel, encargado de determinar los rasgos que se transmiten a la descendencia de una especie, recibe a diario muchas secuencias de ARN, las cuales se estudian y se clasifican para comprender los genes y predecir la transmisión de las características de cada individuo en la nueva descendencia.

Para organizarse, le piden a los analistas de las muestras, generar un documento describiendo la secuencia nucleótidos: A, C, G, U; por ejemplo:

AUGAUCUCG

De la siguiente manera:

A
U
G
A
U
C
U
C
G


Por comodidad se describen en un formato de N*N.
Dependiendo la especie, esta cadena puede tener una longitud de hasta 10.000 N.

Últimamente se han detectado algunas cadenas con datos curiosos y gracias a ciertos estudios, se ha descubierto que dadas ciertas cadenas se pueden encontrar lo que se conoce como mutaciones.

Estas mutaciones suceden cuando las subcadenas que se encuentran en las diagonales principales de la tabla, suman al menos un número par del mismo nucleótido, por ejemplo:


A
U
U
G
G
A
U
C
C
G
C
U
G
C
G
A

Sin mutación

A
U
U
G
G
A
U
C
C
G
C
U
U
C
G
A

Mutación


Cómo resultado de estas nuevas teorías, es que Mendel ha decidido poner foco en su investigación para saber más sobre el tema.

Es por eso que como responsable del área de informática, desarrolles una solución que permita automatizar este proceso y poder ayudar a Mendel a avanzar con su investigación.

# Desarrollo
Para poder avanzar con la automatización de este proceso es que se definieron dos etapas.
# Etapa 1
Necesitamos diseñar e implementar una función que reciba las secuencias de nucleótidos y nos determine si la misma pertenece a un mutante o no.
# Etapa 2
Crear un API REST que:
Reciba la cadena e indique si es un mutante o no.
Permite obtener una estadística de las cadenas analizadas para poder sacar un porcentaje de cuántas de ellas corresponden a la de un mutante.
# Evaluación
Para dar por aprobado el desafío se van a tener en cuenta los siguientes criterios excluyentes:
Etapa 1 completada en el lenguaje de su preferencia.
Entrega el proyecto en un repositorio público con acceso para lectura.
Todos las consideraciones y contemplaciones que se hagan deben estar comentadas en el proyecto.

Adicionalmente, se podrán evaluar estos criterios no excluyentes:
Etapa 2 completa.
Casos de pruebas.
Documentación sobre lo desarrollado con los comentarios correspondientes.

