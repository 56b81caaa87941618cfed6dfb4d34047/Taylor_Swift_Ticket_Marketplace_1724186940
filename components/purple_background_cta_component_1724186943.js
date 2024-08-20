/* Summary: The section has a blurred radial gradient background and a call-to-action (CTA) content block.
It is centered on the page and includes a gradient-based title, a subtitle, a paragraph of text, and a button with a gradient background.
*/

Vue.component("purple_background_cta_component_1724186943", {
    template: `
    <section id="cta-section-container" style="min-height: 430px"      >
        <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6 bg-red-900">
            <div id="content-container" class="relative px-8 py-12 md:py-20 rounded-3xl overflow-hidden bg-red-800">
                <!-- Radial gradient -->
                <div id="radial-gradient" class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                    <div id="radial-gradient-outer" class="bg-red-700 absolute inset-0 translate-z-0 rounded-full blur-120 opacity-70"></div>
                    <div id="radial-gradient-inner" class="absolute w-1/4 h-1/4 translate-z-0 rounded-full blur-40 bg-red-600">
                    </div>
                </div>
                <!-- Blurred shape -->
                <div id="blurred-shape" class="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                        <defs><linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%"><stop offset="0%" class="#FF0000" /><stop offset="100%" class="8B0000" stop-opacity="0" /></linearGradient></defs>
                        <path fill="url(#bs5-a)" fill-rule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
                    </svg>
                </div>
                <!-- Content -->
                <!-- Content -->
                <div id="content" class="max-w-3xl mx-auto text-center">
                    <div class="mb-8">
                        <div class="inline-block border-4 border-red-500 rounded-lg overflow-hidden">
                            <img src="https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Taylor_Swift_Ticket_Marketplace_1724186940/main/images/25a8f08253bc4e36afa5f49423000172.jpeg" alt="Swifties" class="w-64 h-auto" />
                        </div>
                    </div>
                    <div id="content-subtitle" class="flex"><div id="content-subtitle-text" class="flex-1 font-medium text-white pb-3">The go-to platform for all Swifties</div></div>
                    <div class="flex" id="content-title-container"><h2 id="content-title" class="flex-1 h2 pb-4 text-white"> Swiftie Central: Your Ultimate Ticket Hub</h2></div>
                    <div class="flex" id="content-body-container"><p id="content-body" class="flex-1 text-lg mb-8 text-white">Don't miss out on the Eras Tour! Find, buy, and sell Taylor Swift tickets with ease.</p></div>
                    <a id="content-cta-button" href="#0" class="btn transition duration-150 ease-in-out group text-white bg-red-600 hover:bg-red-700">Get Started <span id="content-cta-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-white">-&gt;</span></a>
                </div>
            </div>
        </div>
    </section>`,
        data() {
            return {
                expanded: false, 
                tab: null,
            };
        },
    });
