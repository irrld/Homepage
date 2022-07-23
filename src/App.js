/* This example requires Tailwind CSS v2.0+ */
import {Fragment} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {MenuIcon, XIcon,} from '@heroicons/react/outline'
import {BookOpenIcon, CodeIcon, CogIcon, GlobeAltIcon} from '@heroicons/react/solid'

const features = [
    {
        name: 'Using CloudburstMC/Protocol',
        description:
            'Using the CloudburstMC Protocol and Network libraries as a solid foundation for quick protocol updates and easy maintenance.',
        icon: BookOpenIcon,
    },
    {
        name: 'Rich Plugin Interface',
        description:
            'Easily integrate and extend WaterdogPE with your business logic through the rich plugin interface.',
        icon: CogIcon,
    },
    {
        name: 'Open Source',
        description:
            'WaterdogPE is actively maintained by the Project Team as well as a vast open source community.',
        icon: GlobeAltIcon,
    },
    {
        name: 'Battle-tested',
        description:
            'WaterdogPE is used by some of the most played Bedrock Edition Servers around.',
        icon: CodeIcon,
    },
]


const navigation = [
    {name: 'Features', href: '#features'},
    {name: 'Community', href: '#community'},
    {name: 'Patreon', href: '#patreon'},
    {name: 'Github', href: 'https://github.com/WaterdogPE/WaterdogPE'},
    {name: 'Jenkins', href: 'https://jenkins.waterdog.dev/'},
    {name: 'Documentation', href: 'https://docs.waterdog.dev'},
]

const faqs = [
    {
        id: 1,
        question: "Does WaterdogPE allow you to join from Java Edition on Bedrock Servers?",
        answer:
            "No, WaterdogPE does not include any cross-platform compatibility. ",
    },
    {
        id: 2,
        question: "Is WaterdogPE compatible with BungeeCord plugins?",
        answer:
            "No. While the plugin API is somewhat similar, it differs in many places. If you have existing BungeeCord plugins, they will have to be rewritten.",
    },
    {
        id: 3,
        question: "Which Minecraft: Bedrock versions does WaterdogPE support?",
        answer:
            "WaterdogPE supports all major releases of Minecraft since the 1.14 release. As long as your server software support it, it will work fine.",
    },
    {
        id: 4,
        question: "What is the Partner Role?",
        answer:
            "Partners are servers with over 200 concurrent players who need exclusive, advanced support by the Waterdog maintainers.",
    },
]

export default function App() {
    return (
        <div className="bg-white">
            <header>
                <div className="relative pt-6 pb-10 sm:pb-16">
                    <Popover>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6">
                            <nav className="relative flex items-center justify-between sm:h-10 md:justify-center"
                                 aria-label="Global">
                                <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                                    <div className="flex items-center justify-between w-full md:w-auto">
                                        <span className="sr-only">WaterdogPE</span>
                                        <img
                                            className="h-8 w-auto sm:h-10"
                                            src="/img/WDLogo.png"
                                            alt="Waterdog Logo"
                                        />
                                        <div className="-mr-2 flex items-center md:hidden">
                                            <Popover.Button
                                                className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Open main menu</span>
                                                <MenuIcon className="h-6 w-6" aria-hidden="true"/>
                                            </Popover.Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:flex md:space-x-10">
                                    {navigation.map((item) => (
                                        <a key={item.name} href={item.href}
                                           className="font-medium text-gray-500 hover:text-gray-900">
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </nav>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="duration-150 ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Popover.Panel
                                focus
                                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                            >
                                <div
                                    className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                    <div className="px-5 pt-4 flex items-center justify-between">
                                        <div>
                                            <img
                                                className="h-8 w-auto"
                                                src="/img/WDLogo.png"
                                                alt="WaterdogPE Logo"
                                            />
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button
                                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true"/>
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className="px-2 pt-2 pb-3">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                </div>
            </header>

            <main>
                <div>
                    {/* Hero card */}
                    <div className="relative">
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"/>
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                                <div className="absolute inset-0">
                                    <img
                                        className="h-full w-full object-cover"
                                        src="/img/background-image.jpeg"
                                        alt="Minecraft Background"
                                    />
                                    <div className="absolute inset-0 bg-gray-500 mix-blend-multiply"/>
                                </div>
                                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                        <span className="block text-white">Powerful, Efficient & Extendable</span>
                                        <span className="block text-indigo-400">Minecraft Bedrock Proxy</span>
                                    </h1>
                                    <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-100 sm:max-w-3xl">
                                        Connect your servers, speed up transfer times and manage players using
                                        WaterdogPE.
                                    </p>
                                    <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                        <div
                                            className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                                            <a
                                                href="https://docs.waterdog.dev/books/waterdogpe-setup/page/starting-waterdog"
                                                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                                            >
                                                Get started
                                            </a>
                                            <a
                                                href="https://github.com/WaterdogPE/WaterdogPE"
                                                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-opacity-70 sm:px-8"
                                            >
                                                Source Code
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-100">
                        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                            <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                                Powering some of the most popular Minecraft: Bedrock Edition servers (<span style={{fontSize: "11px"}} className="text-indigo-600"><a href="https://forms.gle/HeTz6AZpmXc1QLZP9">Request Partner</a></span>)
                            </p>
                            <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">

                                <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
                                    <img
                                        className="h-16"
                                        src="/img/partners/nethergames.png"
                                        alt="NetherGames"
                                    />
                                </div>

                                <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
                                    <img className="h-16" src="/img/partners/gommehd.png" alt="GommeHD"/>
                                </div>
                                <div
                                    className="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
                                    <img
                                        className="h-16"
                                        src="/img/partners/hyperlands.png"
                                        alt="Hyperlands"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-12 bg-white" id="features">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="lg:text-center">
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Why use WaterdogPE?
                            </p>
                            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                There are many reasons why you should use WaterdogPE. Here are a few:
                            </p>
                        </div>

                        <div className="mt-10">
                            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative">
                                        <dt>
                                            <div
                                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                <feature.icon className="h-6 w-6" aria-hidden="true"/>
                                            </div>
                                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                        </dt>
                                        <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-900 pb-5">
                    <div className="max-w-7xl mx-auto pt-10 px-4 sm:pt-16 sm:px-6 lg:px-8">
                        <div className="lg:max-w-2xl lg:mx-auto lg:text-center">
                            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Frequently
                                asked questions</h2>
                        </div>
                        <div className="mt-20">
                            <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
                                {faqs.map((faq) => (
                                    <div key={faq.id}>
                                        <dt className="font-semibold text-white">{faq.question}</dt>
                                        <dd className="mt-3 text-gray-400">{faq.answer}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div className="mt-10 mb-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                        <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
                            <a
                                href="https://docs.waterdog.dev"
                                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-opacity-70 sm:px-8"
                            >
                                Documentation
                            </a>
                        </div>
                    </div>
                </div>

                <div className="relative" id="community">
                    <div className="h-auto md:absolute md:left-0 md:h-full md:w-1/2 p-3 flex justify-center items-center">
                        <img
                            style={{
                                width: 659,
                                maxHeight: 879
                            }}
                            className="h-full block rounded rounded-2xl"
                            src="/img/Discord.png"
                            alt=""
                        />
                    </div>
                    <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                        <div className="md:ml-auto md:w-1/2 md:pl-10">
                            <h2 className="text-lg font-semibold uppercase tracking-wider text-indigo-600">Join the
                                community</h2>
                            <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">On Discord & GitHub
                                Discussions</p>
                            <p className="mt-3 text-lg">
                                WaterdogPE is a community project, completely open-source. Our community is primarily
                                based on Discord and we're happy to answer any questions and provide support through the
                                discord server.
                            </p>
                            <div className="mt-8">
                                <div className="inline-flex rounded-md shadow">
                                    <a
                                        href="https://discord.gg/QcRRzXX"
                                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-800"
                                    >
                                        Join the Community
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-300" id="patreon">
                    <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-extrabold sm:text-4xl">
                            <span className="block">Want to supercharge development?</span>
                            <span className="block">Become a patreon today</span>
                        </h2>
                        <p className="mt-4 text-lg leading-6 ">
                            Patreon Sponsors enjoy a fancy role on our discord server. Only through our patreon sponsors
                            is it possible to keep the CI and Web infrastructure of the Waterdog Project running.
                        </p>
                        <a
                            href="https://www.patreon.com/waterdog"
                            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
                        >
                            Become a patreon
                        </a>
                    </div>
                </div>
            </main>

            <footer className="bg-white">
                <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                    <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                        {navigation.map((item) => (
                            <div key={item.name + "-footer"} className="px-5 py-2">
                                <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                    {item.name}
                                </a>
                            </div>
                        ))}
                    </nav>
                    <p className="mt-8 text-center text-base text-gray-400">&copy; 2022 WaterdogPE. All rights
                        reserved.</p>
                </div>
            </footer>
        </div>
    )
}
