tt = 'h"ello my "name is "fasrhan';
for (var y = 0; y < tt.length; y++) {
	if (tt[y] == `"`) {
		tt = [tt.slice(0, y), '\\', tt.slice(y)].join('');
		y += 1;
	}
}
console.log(tt);
