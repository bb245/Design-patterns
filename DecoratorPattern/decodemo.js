			"use strict";
			function simpleInterest(principal,interest, period) {
				this.principal = principal;
				this.interest = interest;
				this.period = period;			
			}

			simpleInterest.prototype.getSimpleInterest = function() {
				return  this.principal * this.interest * this.period ;				
				
			};

			simpleInterest.decorators = {};
			// for country CAN
			simpleInterest.decorators.qubecSimpleInterestCalc = {
				getSimpleInterest: function() {										
					var interest = this._super.getSimpleInterest();					
					interest = interest/100;
					return interest;
				}
			};

			simpleInterest.decorators.qubecSimpleInterestCalcForSenrCitizen = {
				getSimpleInterest: function() {							
					
					var interest = this._super.getSimpleInterest();		
					interest +=  interest*(4.0/100);					
					return interest;
				}
			};

			simpleInterest.decorators.finalSimpleInterestQubec = {
				getSimpleInterest: function() {			
					return "CAN$ " + this._super.getSimpleInterest().toFixed(2);
				}
			};

			// for country USA
			simpleInterest.decorators.fedSimpleInterestCalc = {
				getSimpleInterest: function() {										
					var interest = this._super.getSimpleInterest();					
					interest = interest/100;
					return interest;
				}
			};

			simpleInterest.decorators.fedSimpleInterestCalcForSenrCitizen = {
				getSimpleInterest: function() {				
					var interest = this._super.getSimpleInterest();		
					interest +=  interest*(3.0/100);					
					return interest;
				}
			};

			simpleInterest.decorators.finalSimpleInterest = {
				getSimpleInterest: function() {			
					return "USA$ " + this._super.getSimpleInterest().toFixed(2);
				}
			};
			

			simpleInterest.prototype.decorate = function (decorator) {
				var Fun = function () {},
				overrides = this.constructor.decorators[decorator],
				i,
				newobj;
				
				// Create prototype chain
				Fun.prototype = this;
				newobj = new Fun();
				newobj._super = Fun.prototype;

				// Mixin properties/methods of our decorator
				// Overriding the ones from our prototype
				for (i in overrides) {
					if (overrides.hasOwnProperty(i)) {			
						newobj[i] = overrides[i];
					}
				}

				return newobj;
			};
			document.write( "<em> Interest rate values used to compute simple Interests for countries are only for demonstration purposes.</em>");
			//USA senior citizen
			document.write ("<pre>function simpleInterest(principal,interest, period)</pre>")

			//CAN citizen
			document.write( "<pre style=\"color:brown\">Case 0</pre>");
			document.write ("<b style=\"color:green\";><em>Simple interest calculated for a CAN senior citizen who can enjoy additional interest from both CAN and US over a Principal amount $ 10,000, invested for duration of 3 years @ 5% simple interest p.a lucky one ahh!</em></b>");

			document.write( "<pre style=\"color:blue\">Input</pre>");			
			document.writeln ( "<pre>var simpleInterestforFed = new simpleInterest(10000,5,3);</pre>");
			document.writeln ( "<pre>simpleInterestforFed = simpleInterestforFed.decorate('qubecSimpleInterestCalcForSenrCitizen');	</pre>");					
			document.writeln ( "<pre>simpleInterestforFed = simpleInterestforFed.decorate('fedSimpleInterestCalcForSenrCitizen'); </pre>");		
			document.writeln ( "<pre>simpleInterestforFed = simpleInterestforFed.decorate('finalSimpleInterestQubec');</pre>");
			
			document.write( "<pre style=\"color:blue\">Output</pre>");

			//Simple interest calculator for CAN citizen for a Principal = $ 10,000, invested for duration of 3 years  @ 5% simple interest p.a
			var simpleInterestforFed = new simpleInterest(10000,5,3);
					
			simpleInterestforFed = simpleInterestforFed.decorate('qubecSimpleInterestCalc');	
			simpleInterestforFed = simpleInterestforFed.decorate('qubecSimpleInterestCalcForSenrCitizen');	
			simpleInterestforFed = simpleInterestforFed.decorate('fedSimpleInterestCalcForSenrCitizen');
			simpleInterestforFed = simpleInterestforFed.decorate('finalSimpleInterestQubec');

			document.write( "<p style=\"color:maroon\"> Decorator-constructor pattern example calculating simple Interest for a CAN senior citizen</p>" + simpleInterestforFed.getSimpleInterest());



			document.write( "<pre style=\"color:brown\">Case I</pre>");
			document.write ("<b style=\"color:green\";><em>Simple interest calculated for US senior citizen for a Principal amount $ 10,000, invested for duration of 3 years @ 5% simple interest p.a and an additional privilege interest of 3% p.a</em></b>");

			document.write( "<pre style=\"color:blue\">Input</pre>");			
			document.writeln ( "<pre>var simpleInterestforFed = new simpleInterest(10000,5,3);</pre>");
			document.writeln ( "<pre>simpleInterestforFed = simpleInterestforFed.decorate('fedSimpleInterestCalc');</pre>");
			document.writeln ( "<pre>simpleInterestforFed = simpleInterestforFed.decorate('fedSimpleInterestCalcForSenrCitizen');</pre>");
			document.writeln ( "<pre>simpleInterestforFed = simpleInterestforFed.decorate('finalSimpleInterest');</pre>");
			
			document.write( "<pre style=\"color:blue\">Output</pre>");

			//Simple interest calculator for US senior citizen for a Principal = $ 10,000, invested for duration of 3 years  @ 5% simple interest p.a
			var simpleInterestforFed = new simpleInterest(10000,5,3);
			simpleInterestforFed = simpleInterestforFed.decorate('fedSimpleInterestCalc');
			simpleInterestforFed = simpleInterestforFed.decorate('fedSimpleInterestCalcForSenrCitizen');
			simpleInterestforFed = simpleInterestforFed.decorate('finalSimpleInterest');

			document.write( "<p style=\"color:maroon\"> Decorator-constructor pattern example calculating simple Interest for a USA senior citizen</p>" + simpleInterestforFed.getSimpleInterest());
			
			//USA  citizen
			document.write( "<pre style=\"color:brown\">Case II</pre>");
			document.write ("<b style=\"color:green\";><em>Simple interest calculated for US senior citizen for a Principal amount $ 10,000, invested for duration of 3 years @ 5% simple interest p.a</em></b>");

			document.write( "<pre style=\"color:blue\">Input</pre>");			
			document.writeln ( "<pre>var simpleInterestforFed = new simpleInterest(10000,5,3);</pre>");
			document.writeln ( "<pre>simpleInterestforFed = simpleInterestforFed.decorate('fedSimpleInterestCalc');</pre>");			
			document.writeln ( "<pre>simpleInterestforFed = simpleInterestforFed.decorate('finalSimpleInterest');</pre>");
			
			document.write( "<pre style=\"color:blue\">Output</pre>");

			//Simple interest calculator for US senior citizen for a Principal = $ 10,000, invested for duration of 3 years  @ 5% simple interest p.a
			var simpleInterestforFed = new simpleInterest(10000,5,3);
			simpleInterestforFed = simpleInterestforFed.decorate('fedSimpleInterestCalc');			
			simpleInterestforFed = simpleInterestforFed.decorate('finalSimpleInterest');

			document.write( "<p style=\"color:maroon\"> Decorator-constructor pattern example calculating simple Interest for a USA citizen</p>" + simpleInterestforFed.getSimpleInterest());

			//CAN senior citizen
			document.write( "<pre style=\"color:brown\">Case III</pre>");
			document.write ("<b style=\"color:green\";><em>Simple interest calculated for CAN senior citizen for a Principal amount $ 10,000, invested for duration of 3 years @ 5% simple interest p.a and an additional privilege interest of 4% p.a</em></b>");

			document.write( "<pre style=\"color:blue\">Input</pre>");			
			document.writeln ( "<pre>var simpleInterestforFed = new simpleInterest(10000,5,3);</pre>");
			document.writeln ( "<pre>simpleInterestforFed = simpleInterestforFed.decorate('qubecSimpleInterestCalc');</pre>");			
			document.writeln ( "<pre>simpleInterestforFed = simpleInterestforFed.decorate('qubecSimpleInterestCalcForSenrCitizen');</pre>");	
			document.writeln ( "<pre>simpleInterestforFed = simpleInterestforFed.decorate('finalSimpleInterestQubec');</pre>");
			
			document.write( "<pre style=\"color:blue\">Output</pre>");

			//Simple interest calculator for CAN senior citizen for a Principal = $ 10,000, invested for duration of 3 years  @ 5% simple interest p.a
			var simpleInterestforFed = new simpleInterest(10000,5,3);
					
			simpleInterestforFed = simpleInterestforFed.decorate('qubecSimpleInterestCalc');
			simpleInterestforFed = simpleInterestforFed.decorate('qubecSimpleInterestCalcForSenrCitizen');
			simpleInterestforFed = simpleInterestforFed.decorate('finalSimpleInterestQubec');

			document.write( "<p style=\"color:maroon\"> Decorator-constructor pattern example calculating simple Interest for a CAN senior citizen</p>" + simpleInterestforFed.getSimpleInterest());


			//CAN citizen
			document.write( "<pre style=\"color:brown\">Case IV</pre>");
			document.write ("<b style=\"color:green\";><em>Simple interest calculated for CAN senior citizen for a Principal amount $ 10,000, invested for duration of 3 years @ 7.5% simple interest p.a</em></b>");

			document.write( "<pre style=\"color:blue\">Input</pre>");			
			document.writeln ( "<pre>var simpleInterestforFed = new simpleInterest(10000,7.5,3);</pre>");
			document.writeln ( "<pre>simpleInterestforFed = simpleInterestforFed.decorate('qubecSimpleInterestCalc');</pre>");						
			document.writeln ( "<pre>simpleInterestforFed = simpleInterestforFed.decorate('finalSimpleInterestQubec');</pre>");
			
			document.write( "<pre style=\"color:blue\">Output</pre>");

			//Simple interest calculator for CAN citizen for a Principal = $ 10,000, invested for duration of 3 years  @ 5% simple interest p.a
			var simpleInterestforFed = new simpleInterest(10000,7.5,3);
					
			simpleInterestforFed = simpleInterestforFed.decorate('qubecSimpleInterestCalc');			
			simpleInterestforFed = simpleInterestforFed.decorate('finalSimpleInterestQubec');

			document.write( "<p style=\"color:maroon\"> Decorator-constructor pattern example calculating simple Interest for a CAN senior citizen</p>" + simpleInterestforFed.getSimpleInterest());
		