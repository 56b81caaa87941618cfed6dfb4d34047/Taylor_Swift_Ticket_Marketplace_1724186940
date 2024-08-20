/* Summary: Describes a footer section of a website. The footer contains the following sections, each of which is a column:
1. The first column includes the company logo, copyright notice, and social media links.
2. The second column lists the products and services offered by the company.
3. The third column provides information about the company, including a blog, careers, and financial statements.
4. The fourth column contains resources for the community, terms of service, and a vulnerability reporting page.
5. The fifth column covers legal information such as the refund policy, terms and conditions, privacy policy, and brand kit.
*/

Vue.component("dark_footer_component_1724186943", {
    template: `
<footer id="footer-section-container" style="min-height: 470px" >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 bg-white">
        <!-- Taylor Swift Concerts Table -->
        <div class="py-8">
            <h2 class="text-3xl font-bold text-red-600 mb-6 text-center">Upcoming Taylor Swift Concerts in the US</h2>
            <div class="overflow-x-auto">
                <table class="w-full border-collapse bg-red-50 shadow-lg rounded-lg overflow-hidden">
                    <thead>
                        <tr class="bg-red-600 text-white">
                            <th class="py-3 px-6 text-left">Date</th>
                            <th class="py-3 px-6 text-left">Venue</th>
                            <th class="py-3 px-6 text-left">City</th>
                            <th class="py-3 px-6 text-left">State</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b border-red-200 hover:bg-red-100 transition duration-300">
                            <td class="py-4 px-6">July 15, 2023</td>
                            <td class="py-4 px-6">Levi's Stadium</td>
                            <td class="py-4 px-6">Santa Clara</td>
                            <td class="py-4 px-6">CA</td>
                        </tr>
                        <tr class="border-b border-red-200 hover:bg-red-100 transition duration-300">
                            <td class="py-4 px-6">July 22, 2023</td>
                            <td class="py-4 px-6">SoFi Stadium</td>
                            <td class="py-4 px-6">Los Angeles</td>
                            <td class="py-4 px-6">CA</td>
                        </tr>
                        <tr class="border-b border-red-200 hover:bg-red-100 transition duration-300">
                            <td class="py-4 px-6">August 3, 2023</td>
                            <td class="py-4 px-6">MetLife Stadium</td>
                            <td class="py-4 px-6">East Rutherford</td>
                            <td class="py-4 px-6">NJ</td>
                        </tr>
                        <tr class="border-b border-red-200 hover:bg-red-100 transition duration-300">
                            <td class="py-4 px-6">August 9, 2023</td>
                            <td class="py-4 px-6">Soldier Field</td>
                            <td class="py-4 px-6">Chicago</td>
                            <td class="py-4 px-6">IL</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</footer>`,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});