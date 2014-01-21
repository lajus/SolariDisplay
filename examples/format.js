/*
HEURE    TRAIN       DESTINATION             STATUT             V
___________________________________________________________________
| H:M:S  LLLNNNNNN | EEEEEEEEEEEEEEEEEEEEE | 111111111 NN 222 | N | (x10)

À L'HEURE
RETARD'É'
ANNUL'É'
1 = [' ', 'A', 'À', 'C', 'D',
     'E', 'É', 'H', 'L', 'N',
     'R', 'T', 'U', ''']

MIN/SEC/HRS/JRS/ANS/SIE/INF

2 = ['A', 'C', 'D', 'E', 'F',
     'I', 'J', 'L', 'M', 'N',
	 'O', 'R', 'S' ]
	 
TGV/TER/THA/INT

3 = ['A', 'E', 'G', 'H', 'I',
     'N', 'T', '
	 
*/

format =
[
[
[ 'H', 'E', 'U', 'R', 'E'] , [ 'T', 'R', 'A', 'I', 'N' ],
[ 'D', 'E', 'S', 'T', 'I', 'N', 'A', 'T', 'I', 'O', 'N' ],
[ 'S', 'T', 'A', 'T', 'U', 'T'  ],
[ 'V' ]
], 
[
[ CTR.SOLARIVALUES.hour, ':', CTR.SOLARIVALUES.minute, ':', CTR.SOLARIVALUES.minute], [ 'T', ['E', 'G', 'H'], ['R', 'V', 'A'], CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number],
[ CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter ],
[ [ 'À', 'R', 'A'], [' ', 'E', 'N'], ['L', 'T', 'N'], ['\'', 'A', 'U'], ['H', 'R', 'L'], ['E', 'D', 'É'], ['U', 'É', ' '],
['R', ' '], ['E', ' ']], [CTR.SOLARIVALUES.n5], [ [ ' ', 'S', 'M', 'H', 'J', 'A', 'S', 'I'], [' ', 'I', 'E', 'R', 'N'], [' ', 'N', 'C', 'S', 'E', 'F'] ], [[' '] + CTR.SOLARIVALUES.number]
],
[
[ CTR.SOLARIVALUES.hour, ':', CTR.SOLARIVALUES.minute, ':', CTR.SOLARIVALUES.minute], [ 'T', ['E', 'G', 'H'], ['R', 'V', 'A'], CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number],
[ CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter ],
[ [ 'À', 'R', 'A'], [' ', 'E', 'N'], ['L', 'T', 'N'], ['\'', 'A', 'U'], ['H', 'R', 'L'], ['E', 'D', 'É'], ['U', 'É', ' '],
['R', ' '], ['E', ' ']], [CTR.SOLARIVALUES.n5], [ [ ' ', 'S', 'M', 'H', 'J', 'A', 'S', 'I'], [' ', 'I', 'E', 'R', 'N'], [' ', 'N', 'C', 'S', 'E', 'F'] ], [[' '] + CTR.SOLARIVALUES.number]
],
[
[ CTR.SOLARIVALUES.hour, ':', CTR.SOLARIVALUES.minute, ':', CTR.SOLARIVALUES.minute], [ 'T', ['E', 'G', 'H'], ['R', 'V', 'A'], CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number],
[ CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter ],
[ [ 'À', 'R', 'A'], [' ', 'E', 'N'], ['L', 'T', 'N'], ['\'', 'A', 'U'], ['H', 'R', 'L'], ['E', 'D', 'É'], ['U', 'É', ' '],
['R', ' '], ['E', ' ']], [CTR.SOLARIVALUES.n5], [ [ ' ', 'S', 'M', 'H', 'J', 'A', 'S', 'I'], [' ', 'I', 'E', 'R', 'N'], [' ', 'N', 'C', 'S', 'E', 'F'] ], [[' '] + CTR.SOLARIVALUES.number]
],
[
[ CTR.SOLARIVALUES.hour, ':', CTR.SOLARIVALUES.minute, ':', CTR.SOLARIVALUES.minute], [ 'T', ['E', 'G', 'H'], ['R', 'V', 'A'], CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number],
[ CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter ],
[ [ 'À', 'R', 'A'], [' ', 'E', 'N'], ['L', 'T', 'N'], ['\'', 'A', 'U'], ['H', 'R', 'L'], ['E', 'D', 'É'], ['U', 'É', ' '],
['R', ' '], ['E', ' ']], [CTR.SOLARIVALUES.n5], [ [ ' ', 'S', 'M', 'H', 'J', 'A', 'S', 'I'], [' ', 'I', 'E', 'R', 'N'], [' ', 'N', 'C', 'S', 'E', 'F'] ], [[' '] + CTR.SOLARIVALUES.number]
],
[
[ CTR.SOLARIVALUES.hour, ':', CTR.SOLARIVALUES.minute, ':', CTR.SOLARIVALUES.minute], [ 'T', ['E', 'G', 'H'], ['R', 'V', 'A'], CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number],
[ CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter ],
[ [ 'À', 'R', 'A'], [' ', 'E', 'N'], ['L', 'T', 'N'], ['\'', 'A', 'U'], ['H', 'R', 'L'], ['E', 'D', 'É'], ['U', 'É', ' '],
['R', ' '], ['E', ' ']], [CTR.SOLARIVALUES.n5], [ [ ' ', 'S', 'M', 'H', 'J', 'A', 'S', 'I'], [' ', 'I', 'E', 'R', 'N'], [' ', 'N', 'C', 'S', 'E', 'F'] ], [[' '] + CTR.SOLARIVALUES.number]
],
[
[ CTR.SOLARIVALUES.hour, ':', CTR.SOLARIVALUES.minute, ':', CTR.SOLARIVALUES.minute], [ 'T', ['E', 'G', 'H'], ['R', 'V', 'A'], CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number],
[ CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter ],
[ [ 'À', 'R', 'A'], [' ', 'E', 'N'], ['L', 'T', 'N'], ['\'', 'A', 'U'], ['H', 'R', 'L'], ['E', 'D', 'É'], ['U', 'É', ' '],
['R', ' '], ['E', ' ']], [CTR.SOLARIVALUES.n5], [ [ ' ', 'S', 'M', 'H', 'J', 'A', 'S', 'I'], [' ', 'I', 'E', 'R', 'N'], [' ', 'N', 'C', 'S', 'E', 'F'] ], [[' '] + CTR.SOLARIVALUES.number]
],
[
[ CTR.SOLARIVALUES.hour, ':', CTR.SOLARIVALUES.minute, ':', CTR.SOLARIVALUES.minute], [ 'T', ['E', 'G', 'H'], ['R', 'V', 'A'], CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number],
[ CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter ],
[ [ 'À', 'R', 'A'], [' ', 'E', 'N'], ['L', 'T', 'N'], ['\'', 'A', 'U'], ['H', 'R', 'L'], ['E', 'D', 'É'], ['U', 'É', ' '],
['R', ' '], ['E', ' ']], [CTR.SOLARIVALUES.n5], [ [ ' ', 'S', 'M', 'H', 'J', 'A', 'S', 'I'], [' ', 'I', 'E', 'R', 'N'], [' ', 'N', 'C', 'S', 'E', 'F'] ], [[' '] + CTR.SOLARIVALUES.number]
],
[
[ CTR.SOLARIVALUES.hour, ':', CTR.SOLARIVALUES.minute, ':', CTR.SOLARIVALUES.minute], [ 'T', ['E', 'G', 'H'], ['R', 'V', 'A'], CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number, CTR.SOLARIVALUES.number],
[ CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter, CTR.SOLARIVALUES.eletter ],
[ [ 'À', 'R', 'A'], [' ', 'E', 'N'], ['L', 'T', 'N'], ['\'', 'A', 'U'], ['H', 'R', 'L'], ['E', 'D', 'É'], ['U', 'É', ' '],
['R', ' '], ['E', ' ']], [CTR.SOLARIVALUES.n5], [ [ ' ', 'S', 'M', 'H', 'J', 'A', 'S', 'I'], [' ', 'I', 'E', 'R', 'N'], [' ', 'N', 'C', 'S', 'E', 'F'] ], [[' '] + CTR.SOLARIVALUES.number]
]
];