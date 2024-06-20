'use client';
import { useState, Fragment } from 'react'
import { SearchManufacturerProps } from '@/types/props'
import { Combobox, Transition, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import Image from 'next/image';
import { manufacturers } from '@/utils/data';


const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  const [query, setQuery] = useState('')
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
        item
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.toLowerCase().replace(/\s+/g, ""))
      );
  return (
    <div className='search-manufacturer'>
      <Combobox value={manufacturer} onChange={setManufacturer} >
        <div className='relative w-full' >
          <ComboboxButton className={`absolute top-5`} >
            <Image src={"/car-logo.svg"} width={20} height={20} alt='car logo' className='ml-3 -mt-[0.9rem]' />
          </ComboboxButton>
          <ComboboxInput
            className={`rounded-lg bg-muted py-1 pl-9 focus:outline-none active:border-none`}
            placeholder='volkswagen'
            // displayValue={(manufacturer) => manufacturer}
            onChange={(e) => { setQuery(e.target.value) }}
          >
          </ComboboxInput>
          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery("")} // Reset the search query after the transition completes
          >
            <ComboboxOptions
              style={{ scrollbarColor: "transparent" }}
              className='absolute mt-2 max-h-60 w-full overflow-y-auto rounded-lg bg-muted py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none active:border-none sm:text-sm'
              static
            >
              {filteredManufacturers.length === 0 && query !== "" ? (
                <ComboboxOption
                  value={query}
                  className='px-3 py-1'
                >
                  Create `{query}`
                </ComboboxOption>
              ) : (
                filteredManufacturers.map((item) => (
                  <ComboboxOption
                    key={item}
                    className={({ active }) =>
                      `relative px-3 py-1 ${active ? "bg-blue-500 text-background " : "text-muted-foreground"
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center  pl-3 ${active ? "" : ""}`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </ComboboxOption>
                ))
              )}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer