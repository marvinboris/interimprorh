import { Logo } from "@/components";
import NavItem from "./nav-item";
import { Building, Home, PathTool, Setting } from "iconsax-react";
import { Work } from "react-iconly";

export default function SideDrawer() {
  return (
    <aside className="w-72 h-screen bg-white px-8 flex flex-col overflow-clip">
      <div className="mt-7 mb-14">
        <Logo />
      </div>

      <nav className="flex-1 overflow-auto">
        <NavItem href="/admin" exact icon={Home} name="Dashboard" />
        <NavItem href="/admin/applications" icon={Work} name="Applications" />
        <NavItem
          href="/admin/profiles"
          icon={UserInformation}
          name="Applicant profiles"
        />
        <NavItem
          href="/admin/companies"
          icon={Building}
          name="Manage companies"
        />
        <NavItem
          href="/admin/trainings"
          exact
          icon={PathTool}
          name="Formations"
        />
        <NavItem href="/admin/settings" exact icon={Setting} name="Settings" />
      </nav>
    </aside>
  );
}

function UserInformation(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.9614 5.39453H16.6556C19.2116 5.39453 20.7976 7.1994 20.7976 9.7554V16.648C20.7976 19.1962 19.2116 21.0011 16.6469 21.0011H7.65364C5.09764 21.0011 3.50391 19.1962 3.50391 16.648V9.7554C3.50391 7.1994 5.1064 5.39453 7.65364 5.39453H10.3371"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.8965 10.6445H17.5527M14.8965 13.8908L17.5527 13.9336M15.8923 17.2245H17.5522"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.85645 17.4427C6.85645 16.5427 7.56672 15.4219 9.61287 15.4219C11.66 15.4219 12.3703 16.535 12.3703 17.435"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.3737 11.7142C11.3737 12.6872 10.5856 13.4753 9.61265 13.4753C8.63967 13.4753 7.85156 12.6872 7.85156 11.7142C7.85156 10.7412 8.63967 9.95312 9.61265 9.95312C10.5856 9.95312 11.3737 10.7412 11.3737 11.7142Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.5556 7.57104L12.3141 8.19471C12.2138 8.24531 12.0961 8.24531 11.9949 8.19569L10.7456 7.57104C10.5053 7.45039 10.3535 7.2052 10.3535 6.93666V4.00216C10.3535 3.44854 10.8021 3 11.3567 3H12.9436C13.4972 3 13.9467 3.44854 13.9467 4.00216V6.93763C13.9467 7.20617 13.7949 7.45039 13.5556 7.57104Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
