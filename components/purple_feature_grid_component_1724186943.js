/* Summary: HTML file that describes a list of features.
It contains a grid layout with 6 feature sections, each with an icon, a title, and a description. 
The feature sections are organised in a grid of two rows, each with three columns.
*/

Vue.component("purple_feature_grid_component_1724186943", {
    template: `
    <div class="bg-red-100 p-8 rounded-lg shadow-lg backdrop-blur-md bg-opacity-80">
        <h2 class="text-3xl font-bold text-red-800 mb-6">Buy Taylor Swift Concert Tickets</h2>
        <form class="space-y-4" @submit.prevent="submitForm">
            <div>
                <label for="concert" class="block text-red-700 font-semibold mb-2">Select Concert</label>
                <select v-model="concert" id="concert" class="w-full p-2 border border-red-300 rounded-md focus:ring-red-500 focus:border-red-500 shadow-sm">
                    <option value="">Choose a concert</option>
                    <option value="new-york">New York - August 15, 2023</option>
                    <option value="los-angeles">Los Angeles - September 2, 2023</option>
                    <option value="chicago">Chicago - September 20, 2023</option>
                </select>
            </div>
            <div>
                <label for="seat" class="block text-red-700 font-semibold mb-2">Select Seat</label>
                <select v-model="seat" id="seat" class="w-full p-2 border border-red-300 rounded-md focus:ring-red-500 focus:border-red-500 shadow-sm">
                    <option value="">Choose a seat</option>
                    <option v-for="(price, seat) in seatPrices" :key="seat" :value="seat">
                        {{ seat }} - ${{ price }}
                    </option>
                </select>
            </div>
            <div v-if="isAisleSeat" class="bg-green-100 p-4 rounded-md shadow-sm">
                <p class="text-green-700"><i class='bx bx-check-circle'></i> We recommend this aisle seat for easy access!</p>
            </div>
            <div>
                <label for="tickets" class="block text-red-700 font-semibold mb-2">Number of Tickets</label>
                <input v-model.number="tickets" type="number" id="tickets" min="1" max="10" class="w-full p-2 border border-red-300 rounded-md focus:ring-red-500 focus:border-red-500 shadow-sm">
            </div>
            <div>
                <label for="name" class="block text-red-700 font-semibold mb-2">Full Name</label>
                <input v-model="name" type="text" id="name" class="w-full p-2 border border-red-300 rounded-md focus:ring-red-500 focus:border-red-500 shadow-sm">
            </div>
            <div>
                <label for="email" class="block text-red-700 font-semibold mb-2">Email</label>
                <input v-model="email" type="email" id="email" class="w-full p-2 border border-red-300 rounded-md focus:ring-red-500 focus:border-red-500 shadow-sm">
            </div>
            <div>
                <button type="submit" class="w-full bg-red-600 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition duration-300 shadow-md">
                    Purchase Tickets
                </button>
            </div>
        </form>
    </div>
    `,
    `,
    data() {
        return {
            concert: '',
            seat: '',
            tickets: 1,
            name: '',
            email: '',
            seatPrices: {
                'A1 (Aisle)': 150,
                'A2': 140,
                'A3': 140,
                'B1 (Aisle)': 130,
                'B2': 120,
                'B3': 120,
                'C1 (Aisle)': 110,
                'C2': 100,
                'C3': 100,
            }
        }
    },
    computed: {
        isAisleSeat() {
            return this.seat.includes('Aisle');
        }
    },
    },
    methods: {
        // Start of submitForm method
        submitForm() {
            // Handle form submission logic here
            console.log('Form submitted:', this.concert, this.seat, this.tickets, this.name, this.email);
            // Add your form submission logic here
        }
        // End of submitForm method
    }
});
                    