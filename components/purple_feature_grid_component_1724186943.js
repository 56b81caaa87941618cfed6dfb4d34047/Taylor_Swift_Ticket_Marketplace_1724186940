/* Summary: HTML file that describes a list of features.
It contains a grid layout with 6 feature sections, each with an icon, a title, and a description. 
The feature sections are organised in a grid of two rows, each with three columns.
*/

Vue.component("purple_feature_grid_component_1724186943", {
    template: `
    <div class="bg-red-100 p-8 rounded-lg shadow-lg">
        <h2 class="text-3xl font-bold text-red-800 mb-6">Buy Taylor Swift Concert Tickets</h2>
        <form class="space-y-4">
            <div>
                <label for="concert" class="block text-red-700 font-semibold mb-2">Select Concert</label>
                <select id="concert" class="w-full p-2 border border-red-300 rounded-md focus:ring-red-500 focus:border-red-500">
                    <option>Choose a concert</option>
                    <option>New York - August 15, 2023</option>
                    <option>Los Angeles - September 2, 2023</option>
                    <option>Chicago - September 20, 2023</option>
                </select>
            </div>
            <div>
                <label for="tickets" class="block text-red-700 font-semibold mb-2">Number of Tickets</label>
                <input type="number" id="tickets" min="1" max="10" class="w-full p-2 border border-red-300 rounded-md focus:ring-red-500 focus:border-red-500">
            </div>
            <div>
                <label for="name" class="block text-red-700 font-semibold mb-2">Full Name</label>
                <input type="text" id="name" class="w-full p-2 border border-red-300 rounded-md focus:ring-red-500 focus:border-red-500">
            </div>
            <div>
                <label for="email" class="block text-red-700 font-semibold mb-2">Email</label>
                <input type="email" id="email" class="w-full p-2 border border-red-300 rounded-md focus:ring-red-500 focus:border-red-500">
            </div>
            <div>
                <button type="submit" class="w-full bg-red-600 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition duration-300">
                    Purchase Tickets
                </button>
            </div>
        </form>
    </div>
    `,
    data() {
        return {
            concert: '',
            tickets: 1,
            name: '',
            email: ''
        }
    },
    methods: {
        // Start of submitForm method
        submitForm() {
            // Handle form submission logic here
            console.log('Form submitted:', this.concert, this.tickets, this.name, this.email);
        }
        // End of submitForm method
    }
});
                    