function dec2bin(val) {
            var bits = [];
            for (var i = 0; i < 8; i++) {
            	bits.push(val % 2);
                val = (val - val % 2) / 2;
            }
            bits.reverse();
            return bits.join("");
	}
            bits.push(dividend);
            bits.reverse();
            return bits.join("");
        }
