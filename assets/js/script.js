/* credit: code for burger menu taken from https://www.geeksforgeeks.org/how-to-create-hamburger-menu-for-mobile-devices and edited slightly do fit project needs */
function gfgMenu() {
            const GFG = document.querySelector('.links');
            if (GFG.classList.contains('d-none')) {
                GFG.classList.remove('d-none');
            }
            else {
                GFG.classList.add('d-none');
            }
        }