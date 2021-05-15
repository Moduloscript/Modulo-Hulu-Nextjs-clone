import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
    
} from "@heroicons/react/outline";

import Image from 'next/image';
import HeaderItem from './HeaderItem';

function Header() {
    return (
        <header className="flex flex-col items-center justify-between h-auto m-5 sm:flex-row">
            <div className="flex flex-grow max-w-2xl justify-evenly">
                <HeaderItem title='HOME' Icon={ HomeIcon }/>
                <HeaderItem title='VERIFIED' Icon={ BadgeCheckIcon }/>
                <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
                <HeaderItem title='SEARCH' Icon={SearchIcon} />
                <HeaderItem title='ACCOUNT' Icon={UserIcon} />
                <HeaderItem title='COLLECTIONS' Icon={ CollectionIcon }/>

                
           </div>
            <Image
            className="object-contain"    
            src="https://links.papareact.com/ua6"
            width={200}
            height={100}
            />
        </header>
    )
}

export default Header
