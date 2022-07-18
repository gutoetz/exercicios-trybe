const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`
  
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    order.name = 'Luiz Silva'
    order.payment.total = 'R$ 50,00'
    return `Olá ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza)[0]}, ${Object.keys(order.order.pizza)[1]} e ${order.order.drinks.coke.type} é R$ ${order.payment.total}`
  }
  
  orderModifier(order);

  const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  function adicionando() {
    lesson2.turno = 'noite'
  }

  function mudando (obj){
    console.log(Object.keys(obj))
    console.log(`O tamanho do objeto é ${Object.entries(obj).length}`)
    console.log(`Os valores do objeto são: ${Object.values(obj).join(", ")}.`)
    const allLessons = {}
    Object.assign(allLessons, {lesson1}, {lesson2}, {lesson3});
    console.log(allLessons)
    console.log(`Tem ${lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes} estudantes no total`)  
  }

  const teste = (lesson, chave, valor) => {
    const array = Object.entries(lesson)
    for(let index = 0; index < array.length; index += 1){
        if(chave === array[index][0] && valor === array[index][1]){
        return console.log(true)
      }
    }
    return console.log(false)
  }
  adicionando()