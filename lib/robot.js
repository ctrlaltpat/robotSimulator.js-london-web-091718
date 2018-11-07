class Robot {
	constructor() {
		this.coordinates = [0,0]
		this.bearing = 'north'
		this.directions = ['north','east','south','west']
	}

	setCoordinates(x,y) {
		this.coordinates = [x,y]
	}

	setBearing(direction) {
		if (this.directions.includes(direction)) {
			this.bearing = direction
		} else {
			throw new Error('Invalid Robot Bearing')
		}
	}

	place(data) {
		this.setCoordinates(data.x, data.y)
		this.setBearing(data.direction)
	}

	turnRight() {
		const currentBearingIndex = this.directions.indexOf(this.bearing)
		if (currentBearingIndex === 3){
			this.bearing = this.directions[0]
		} else {
			this.bearing = this.directions[currentBearingIndex + 1]
		}
	}
	turnLeft() {
		const currentBearingIndex = this.directions.indexOf(this.bearing)
		if (currentBearingIndex === 0){
			this.bearing = this.directions[3]
		} else {
			this.bearing = this.directions[currentBearingIndex - 1]
		}
	}

	advance() {
		switch (this.bearing) {
			case 'north':
				this.setCoordinates(this.coordinates[0], this.coordinates[1] + 1)
				break;
			case 'east':
				this.setCoordinates(this.coordinates[0] + 1, this.coordinates[1])
				break;
			case 'south':
				this.setCoordinates(this.coordinates[0], this.coordinates[1] - 1)
				break;
			case 'west':
				this.setCoordinates(this.coordinates[0] - 1, this.coordinates[1])
				break;
		}
	}

	translateInstructions(code) {
		code.split("").forEach(letter => {
			switch (letter) {
				case 'L':
					this.turnLeft()
					break;
				case 'R':
					this.turnRight()
					break;
				case 'A':
					this.advance()
					break;
			}
		});
	}
}
