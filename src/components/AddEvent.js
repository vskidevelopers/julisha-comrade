import { PhotoIcon } from "@heroicons/react/24/outline";

export default function AddEvents() {
  return (
    <>
      <div>
        <div className="flex justify-center">
          <div className="w-3/5">
            <form action="#" method="POST">
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6 flex flex-col">
                  <div className="flex">
                    <div className="w-1/2 mr-2">
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Event Name
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        className="w-full"
                        placeholder="Event Name"
                      />
                    </div>

                    <div className="w-1/2">
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Event Name
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        className="w-full"
                        placeholder="Event Name"
                      />
                    </div>
                  </div>

                  <div className="flex">
                    <div className="w-4/5 mr-2 flex">
                      <div className="w-1/2 mr-1">
                        <label
                          htmlFor="start"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Start Date
                        </label>
                        <input type="date" className="w-full text-gray-600" />
                      </div>
                      <div className="w-1/2">
                        <label
                          htmlFor="start"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Start Date
                        </label>
                        <input type="date" className="w-full text-gray-500" />
                      </div>
                    </div>

                    <div className="w-1/5">
                      <label
                        htmlFor="fee"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Entry Fee
                      </label>
                      <input
                        type="number"
                        name="fee"
                        id="fee"
                        className="w-full"
                        placeholder="Entry Fee"
                      />
                    </div>
                  </div>

                  <div className="flex">
                    <div className="w-1/2 mr-2">
                      <label
                        htmlFor="venue"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Venue
                      </label>
                      <input
                        type="text"
                        name="venue"
                        id="venue"
                        className="w-full"
                        placeholder="Event Name"
                      />
                    </div>

                    <div className="w-1/2 flex items-end">
                      <div className="flex items-center ">
                        <PhotoIcon className="w-10 h-10 text-gray-800" />
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md text-sm bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <label className="block text-sm font-medium text-gray-700">
                      Cover photo
                    </label>
                    <div className="mt-1 flex px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
