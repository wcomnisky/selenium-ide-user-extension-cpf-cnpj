Selenium.prototype.doGenerateCNPJ = function(locator) {
	// All locator-strategies are automatically handled by "findElement"
	var element = this.page().findElement(locator);
	
	var n1 = Math.floor(Math.random()*10);
	var n2 = Math.floor(Math.random()*10);
	var n3 = Math.floor(Math.random()*10);
	var n4 = Math.floor(Math.random()*10);
	var n5 = Math.floor(Math.random()*10);
	var n6 = Math.floor(Math.random()*10);
	var n7 = Math.floor(Math.random()*10);
	var n8 = Math.floor(Math.random()*10);
	var n9 = 0;
	var n10 = 0;
	var n11 = 0;
	var n12 = 1;
	
	var d1 = (n12*2)+(n11*3)+(n10*4)+(n9*5)+(n8*6)+(n7*7)+(n6*8)+(n5*9)+(n4*2)+(n3*3)+(n2*4)+(n1*5);
	d1 = (11-(d1%11));
	if(d1 >= 10)
	{ 
		d1 = 0;
	}
	var d2 = (d1*2)+(n12*3)+(n11*4)+(n10*5)+(n9*6)+(n8*7)+(n7*8)+(n6*9)+(n5*2)+(n4*3)+(n3*4)+(n2*5)+(n1*6);
	d2 = (11-(d2%11));
	if(d2 >= 10)
	{
		d2 = 0;
	}
	
	var cnpj = ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+n10+n11+n12+d1+d2;
	var valueToType = cnpj;

	//Todos os direitos reservados. @Maurício Avellar
	// Replace the element text with the new text
	this.page().replaceText(element, valueToType);
};
	
Selenium.prototype.doGenerateCPF = function(locator) {
	// All locator-strategies are automatically handled by "findElement"
	var element = this.page().findElement(locator);

	var n1 = Math.floor(Math.random()*10);
	var n2 = Math.floor(Math.random()*10);
	var n3 = Math.floor(Math.random()*10);
	var n4 = Math.floor(Math.random()*10);
	var n5 = Math.floor(Math.random()*10);
	var n6 = Math.floor(Math.random()*10);
	var n7 = Math.floor(Math.random()*10);
	var n8 = Math.floor(Math.random()*10);
	var n9 = Math.floor(Math.random()*10);

	var d1 = (n1*10)+(n2*9)+(n3*8)+(n4*7)+(n5*6)+(n6*5)+(n7*4)+(n8*3)+(n9*2);
	d1 = (11-(d1%11));
	if(d1 >= 10)
	{ 
		d1 = 0;
	}
	var d2 = (n1*11)+(n2*10)+(n3*9)+(n4*8)+(n5*7)+(n6*6)+(n7*5)+(n8*4)+(n9*3)+(d1*2);
	d2 = (11-(d2%11));
	if(d2 >= 10)
	{
		d2 = 0;
	}

	var cpf = ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+d1+d2;
	var valueToType = cpf;

	//Todos os direitos reservados. @Maurício Avellar
	// Replace the element text with the new text
	this.page().replaceText(element, valueToType);
};
