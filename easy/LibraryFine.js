function libraryFine(d1, m1, y1, d2, m2, y2) {
	if (y1 == y2) {
		if (m1 == m2) {
			if (d1 <= d2) {
				return 0;
			} else {
				return (d1 - d2) * 15;
			}
		} else if (m1 < m2) {
			return 0;
		} else {
			return (m1 - m2) * 500;
		}
	} else if (y1 < y2) {
		return 0;
	} else {
		return 10000;
	}
}

// https://www.hackerrank.com/challenges/library-fine/
