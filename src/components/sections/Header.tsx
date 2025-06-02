'use client'

import { useState } from 'react'
import { Close, Menu } from '@/app/shared'
import * as Dialog from '@radix-ui/react-dialog'

const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Partners', href: '#' },
    { name: 'How to play', href: '#' },
    { name: 'FAQs', href: '#' },
]

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <div className="flex lg:hidden">
            <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Trigger asChild>
                    <Menu className="w-7 h-7" />
                </Dialog.Trigger>

                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/30 z-40" />
                    <Dialog.Content className="fixed inset-y-0 left-0 z-50 w-full bg-[#2F3843] px-6 py-6 overflow-y-auto">
                        <Dialog.Title className="DialogTitle"></Dialog.Title>
                        <div className="flex items-center justify-end">
                            <Dialog.Close asChild>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                >
                                    <span className="sr-only">Close menu</span>
                                    <Close className="w-6 h-6 fill-white" />
                                </button>
                            </Dialog.Close>
                        </div>
                        <div className="mt-6 space-y-6">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block rounded-lg px-3 py-2 text-base font-semibold text-[#D2D4D7] hover:bg-gray-100"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    )
}
