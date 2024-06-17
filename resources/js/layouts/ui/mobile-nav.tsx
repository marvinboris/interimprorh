import Nav from "./nav";
import { Transition } from "@/components";
import { Menu } from "@headlessui/react";
import { HambergerMenu } from "iconsax-react";
import { Link } from "react-router-dom";

export default function MobileNav() {
    return (
        <Menu as="div" className="relative lg:hidden ml-4">
            <Menu.Button>
                <HambergerMenu className="size-10 text-primary" />
            </Menu.Button>

            <Transition>
                <Menu.Items className="absolute top-full right-0 bg-white rounded-lg p-3 shadow-sm border border-stone-200">
                    <Nav />

                    <Link
                        className="flex items-center text-primary mt-3"
                        to="/login"
                    >
                        <div className="font-semibold font-display underline text-sm">
                            SIGN IN
                        </div>
                    </Link>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
