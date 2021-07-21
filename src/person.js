const isAdult = (age) => {
	return age >= 18 ? true : false;
};

const canDrink = (age) => {
	return age >= 21 ? true : false;
};

const isSenior = (age) => age >= 65 ? true : false;

export { isAdult, canDrink, isSenior as default };