// Fetch plans data


const plans = [

    { name: 'Basic', coverage: 'Comprehensive coverage', cost: '$100/month' },
    { name: 'Basic Plus', coverage: 'Basic coverage', cost: '$75/month' },
    { name: 'Primeum', coverage: 'Specialized coverage', cost: '$120/month' }

];

plans.forEach(plan => {

    const card = document.createElement('div');
    card.classList.add('insuranceCard');

    card.innerHTML = `
      <h3>${plan.name}</h3>
      <p>Coverage: ${plan.coverage}</p>
      <p>Cost: ${plan.cost}</p>
    `;

    document.getElementById('insurancePlans')
        .appendChild(card);

});