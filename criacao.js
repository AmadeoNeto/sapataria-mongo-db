//Cria o banco de dados
use sapatariaDB

// Cria a coleção de calçados
db.calcados.insertOne({
    codigo: "tenalco37", 
    tipo: "tenis", 
    marca: "all star", 
    modelo: "converse chuck taylor", 
    tamanho: "37", 
    quantidadeEstoque: "20", 
    preco: "199,90"
})

/*
Código ( 3 primeiras letras do tipo + 
  2 primeiras letras da marca+ 
  2 primeiras letras do modelo + 
  Tamanho);
*/

db.calcados.insertMany([
    {
        codigo: "tenalco37", 
        tipo: "tenis", 
        marca: "all star", 
        modelo: "converse chuck taylor", 
        tamanho: "37", 
        quantidadeEstoque: "20", 
        preco: "199,90"
    },
    {
        codigo: "menimep",
        tipo: "meia",
        marca: "nike",
        modelo: "meia-perna",
        tamanho: "P",
        quantidadeEstoque: 20,
        preco: 40.00
    },
    {
        codigo: "sanbeve35",
        tipo: "sandalia",
        marca: "beira rio",
        modelo: "verniz",
        tamanho: "35",
        quantidadeEstoque: 10,
        preco: 40.89
    },
    {
        codigo: "sabzabe38",
        tipo: "sandalia",
        marca: "zaxy",
        modelo: "be yourself",
        tamanho: "38",
        quantidadeEstoque: 10,
        preco: 25.90
    },
    {
        codigo: "christ38",
        tipo: "chinelo",
        marca: "rider",
        modelo: "street slide",
        tamanho: "38",
        quantidadeEstoque: 20,
        preco: 26.60
    },
    {
        codigo: "pagrse42",
        tipo: "papete",
        marca: "grendene",
        modelo: "senninha",
        tamanho: "42",
        quantidadeEstoque: 30,
        preco: 40.00
    },
    {
        codigo: "teadsp41",
        tipo: "tenis",
        marca: "adidas",
        modelo: "spring blade",
        tamanho: "41",
        quantidadeEstoque: 17,
        preco: 999.90
    },
    {
        codigo: "teadsp38",
        tipo: "tenis",
        marca: "adidas",
        modelo: "spring blade",
        tamanho: "38",
        quantidadeEstoque: 2,
        preco: 999.90
    },
    {
        codigo: "meadmig",
        tipo: "meia",
        marca: "adidas",
        modelo: "milano",
        tamanho: "G",
        quantidadeEstoque: 62,
        preco: 60.00
    },
    {
        codigo: "meadmim",
        tipo: "meia",
        marca: "adidas",
        modelo: "milano",
        tamanho: "M",
        quantidadeEstoque: 14,
        preco: 55.00
    },
    {
        codigo: "meadmip",
        tipo: "meia",
        marca: "adidas",
        modelo: "milano",
        tamanho: "P",
        quantidadeEstoque: 32,
        preco: 50.00
    },
    {
        codigo: "sapadgr42",
        tipo: "sapato",
        marca: "Adidas",
        modelo: "Grand Court",
        tamanho: "42",
        quantidadeEstoque: 80,
        preco: 1307.77
    }, 
    {
        codigo: "sapadgr38",
        tipo: "sapato",
        marca: "Adidas",
        modelo: "Grand Court",
        tamanho: "38",
        quantidadeEstoque: 23,
        preco: 1207.66
    }, 
    {
        codigo: "tenmiin22",
        tipo: "tenis",
        marca: "mini pe",
        modelo: "Infantil com LED",
        tamanho: "22",
        quantidadeEstoque: 40,
        preco: 107.90
    }, 
    {
        codigo: "chupufu40",
        tipo: "chuteira",
        marca: "puma",
        modelo: "future z",
        tamanho: "40",
        quantidadeEstoque: 23,
        preco: 538.50
    }, 
    {
        codigo: "chupufu38",
        tipo: "chuteira",
        marca: "puma",
        modelo: "future z",
        tamanho: "38",
        quantidadeEstoque: 12,
        preco: 508.50
    }, 
    {
        codigo: "chupufu42",
        tipo: "chuteira",
        marca: "puma",
        modelo: "future z",
        tamanho: "42",
        quantidadeEstoque: 5,
        preco: 558.50
    }, 
    {
        codigo: "chnica40",
        tipo: "chuteira",
        marca: "nike",
        modelo: "Campo C/ Pinos",
        tamanho: "40",
        quantidadeEstoque: 22,
        preco: 322.46
    }, 
    {
        codigo: "chnica37",
        tipo: "chuteira",
        marca: "nike",
        modelo: "Campo C/ Pinos",
        tamanho: "37",
        quantidadeEstoque: 22,
        preco: 322.46
    }, 
    {
        codigo: "chadqu37",
        tipo: "chuteira",
        marca: "adidas",
        modelo: "Quadra S/ Pinos",
        tamanho: "37",
        quantidadeEstoque: 07,
        preco: 277.33
    }, 
    {
        codigo: "medacag",
        tipo: "meia",
        marca: "dafiti",
        modelo: "cano longo",
        tamanho: "G",
        quantidadeEstoque: 12,
        preco: 62.00
    },
    {
        codigo: "mesusop",
        tipo: "meia",
        marca: "supreme",
        modelo: "socket",
        tamanho: "p",
        quantidadeEstoque: 1,
        preco: 6969.77    
    },
    {
        codigo: "tenguac37",
        tipo: "tenis",
        marca: "gucci",
        modelo: "ace",
        tamanho: "37",
        quantidadeEstoque: 2,
        preco: 2599.00
    }, 
    {
        codigo: "chihato33",
        tipo: "chinelo",
        marca: "havaianas",
        modelo: "top",
        tamanho: "33",
        quantidadeEstoque: 32,
        preco: 30.00
    }, 
    {
        codigo: "chihato38",
        tipo: "chinelo",
        marca: "havaianas",
        modelo: "top",
        tamanho: "38",
        quantidadeEstoque: 11,
        preco: 48.90
    }, 
    {
        codigo: "sahaun42",
        tipo: "sandalia",
        marca: "havaianas",
        modelo: "unisex",
        tamanho: "42",
        quantidadeEstoque: 101,
        preco: 17.77
    }, 
    {
        codigo: "sahaun39",
        tipo: "sandalia",
        marca: "havaianas",
        modelo: "unisex",
        tamanho: "39",
        quantidadeEstoque: 103,
        preco: 15.77
    }, 
    {
        codigo: "sahaun39",
        tipo: "sandalia",
        marca: "havaianas",
        modelo: "unisex",
        tamanho: "42",
        quantidadeEstoque: 32,
        preco: 41.77
    }, 
    {
        codigo: "tejoma45",
        tipo: "tenis",
        marca: "jordan nike",
        modelo: "Max Aura 3",
        tamanho: "45",
        quantidadeEstoque: 3,
        preco: 759.99
    }, 
    {
        codigo: "teolae44",
        tipo: "tenis",
        marca: "olympikus",
        modelo: "aeros",
        tamanho: "44",
        quantidadeEstoque: 23,
        preco: 289.99
    }, 
    {
        codigo: "teolae42",
        tipo: "tenis",
        marca: "olympikus",
        modelo: "aeros",
        tamanho: "42",
        quantidadeEstoque: 12,
        preco: 299.99
    }, 
    {
        codigo: "saipcl41",
        tipo: "sandalia",
        marca: "ipanema",
        modelo: "class",
        tamanho: "41",
        quantidadeEstoque: 13,
        preco: 27.37
    }, 
    {
        codigo: "botcade36",
        tipo: "bota",
        marca: "caterpillar",
        modelo: "deplete wp",
        tamanho: "36",
        quantidadeEstoque: 26,
        preco: 849.90
    }, 
    {
        codigo: "botcade40",
        tipo: "bota",
        marca: "caterpillar",
        modelo: "deplete wp",
        tamanho: "40",
        quantidadeEstoque: 15,
        preco: 899.90
    }, 
    {
        codigo: "bottigo42",
        tipo: "bota",
        marca: "timberland",
        modelo: "gorge C2",
        tamanho: "42",
        quantidadeEstoque: 3,
        preco: 480.00
    }, 
    {
        codigo: "bottigo38",
        tipo: "bota",
        marca: "timberland",
        modelo: "gorge C2",
        tamanho: "38",
        quantidadeEstoque: 7,
        preco: 420.00
    }, 
    {
        codigo: "bottigo40",
        tipo: "bota",
        marca: "timberland",
        modelo: "gorge C2",
        tamanho: "40",
        quantidadeEstoque: 10,
        preco: 450.00
    }
])



// Cria a coleção de vendedores
db.vendedor.insertMany([
    {
        cpf: "001",
        nome: "Kisho Murakami Inoue",
        dataEntrada: new Date("2018-12-31"),
        numeroDeVendasNoMes: 0,
        salario: 1500.00
    },
    
    {
        cpf: "002",
        nome: "Aozora Mitsuhide",
        dataEntrada: new Date("1982-01-02"),
        numeroDeVendasNoMes: 0,
        salario: 3350.00
    },
    
    {
        cpf: "003",
        nome: "Claurêncio Roberto de Azevedo",
        dataEntrada: new Date("2014-04-25"),
        numeroDeVendasNoMes: 0,
        salario: 1200.00
    },

    {
        cpf: "004",
        nome: "Tanji Hatsune",
        dataEntrada: new Date("2020-04-25"),
        numeroDeVendasNoMes: 0,
        salario: 1400.00
    },

    {
        cpf: "005",
        nome: "Meliquiades Rosa e Silva",
        dataEntrada: new Date("2017-10-12"),
        numeroDeVendasNoMes: 0,
        salario: 1400.00
    },

    {
        cpf: "006",
        nome: "Calisto Alberto Felônio",
        dataEntrada: new Date("2019-02-28"),
        numeroDeVendasNoMes: 0,
        salario: 1450.00
    },

    {
        cpf: "007",
        nome: "James Bond",
        dataEntrada: new Date("1953-04-07"),
        numeroDeVendasNoMes: 0,
        salario: 7777.77
    },

    {
        cpf: "008",
        nome: "Hiran Delmar",
        dataEntrada: new Date("2004-12-07"),
        numeroDeVendasNoMes: 0,
        salario: 1380.00
    },

    {
        cpf: "009",
        nome: "João Alberto",
        dataEntrada: new Date("2003-12-08"),
        numeroDeVendasNoMes: 0,
        salario: 1200.00
    },

    {
        cpf: "010",
        nome: "Kawada Manami",
        dataEntrada: new Date("1945-06-02"),
        numeroDeVendasNoMes: 0,
        salario: 10000.00
    },

    {
        cpf: "011",
        nome: "Senor Firmino Olimar",
        dataEntrada: new Date("2009-10-04"),
        numeroDeVendasNoMes: 0,
        salario: 999.99
    },

    {
        cpf: "012",
        nome: "Klaus Andrade Filho",
        dataEntrada: new Date("1955-12-24"),
        numeroDeVendasNoMes: 0,
        salario: 1500.00
    },

    {
        cpf: "013",
        nome: "Orlando Uóshinton",
        dataEntrada: new Date("2012-05-28"),
        numeroDeVendasNoMes: 0,
        salario: 2000.00
    }
])

// Cria a coleção de VENDA
db.venda.insertMany([
    {
        produtosVendidos: [
            {codigo: "tenalco37", quantidadeVendida: 1}
        ],
        cpfCliente: "123",
        cpfVendedor: "001",
        valorCompra: 199.90,
        dataHoraVenda: new Date(Date.now())
    },

    {
        produtosVendidos: [
            {codigo: "botcade40", quantidadeVendida: 1},
            {codigo: "bottigo38", quantidadeVendida: 1},
            {codigo: "teolae42", quantidadeVendida: 1}
        ],
        cpfCliente: "321",
        cpfVendedor: "",
        valorCompra: ,
        dataHoraVenda: new Date(Date.now())
    }
])

/*
iterar sobre os records de venda pra atalizar sobre o atributo
numeroDeVendas dos records de vendedor
*/
