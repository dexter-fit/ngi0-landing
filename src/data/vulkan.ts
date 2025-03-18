import {ProjectCardType, ProjectPageType, DossierType} from "../types";

export const VULKAN_DOSSIER_PATHNAME = "vulkan";

const VULKAN_CARDS: ProjectCardType[] = [];

const VULKAN_TAGS: string[] = [];

const VULKAN_PROJECTS: ProjectPageType = {
    pageTitle: "Vulkan Tutorial",
    menuTitle: "Vulkan Tutorial",
    projectDescription: [
        {
            header: "Vulkan Tutorial",
            text: `
[Vulkan](https://en.wikipedia.org/wiki/Vulkan) is a low-level, low-overhead API for 3D graphics and computing. This tutorial is hosted in git repository [https://github.com/Vulkan-FIT/VulkanTutorial](https://github.com/Vulkan-FIT/VulkanTutorial). All text, images and example code could be downloaded from there. The tutorial is organized in number of series, each focused on a little different area of Vulkan or rendering in general:

### Devices, Instance and Loader

1\. [List of Devices](vulkan/detail/deviceList)  
2\. [Development Tools](vulkan/detail/developmentTools)  
3\. [Device Info](vulkan/detail/deviceInfo)  
4\. [Advanced Device Info](vulkan/detail/advancedInfo)  
5\. [Logical device](vulkan/detail/logicalDevice)  

### Command submission, pipeline and queries

6\. Command submission  
7\. Compute shader and pipeline  
8\. Time queries  

### Rendering basics

9\. Graphics pipeline  
10\. Render Pass  
11\. Hello Triangle  

### Rendering to window

12\. Native window  
13\. VulkanWindow  

### Fractal application

14\. Mandelbrot set  
15\. Double precision computations  

### Other useful resources

*   Vulkan specification - I recommend the [core only specification](https://registry.khronos.org/vulkan/specs/1.3/pdf/vkspec.pdf) for inital study, or the [one with KHR extensions](https://registry.khronos.org/vulkan/specs/1.3-khr-extensions/pdf/vkspec.pdf) (with ratified extensions) as it contains WSI (Window System Integration). WSI is implemented using extensions so it is missing in core only specification. All the remaining versions of Vulkan specification are available at [Khronos Vulkan Registry](https://registry.khronos.org/vulkan/) including html versions.
*   [Khronos Vulkan Tutorial](https://docs.vulkan.org/tutorial/latest/00_Introduction.html) - using C Vulkan API and GLFW
*   Website of [vulkan.org](https://vulkan.org), especially [Key resources section](https://vulkan.org/learn#key-resources) and [Vulkan Tutorials](https://vulkan.org/learn#vulkan-tutorials).
*   [Vulkan tutorial on root.cz](https://www.root.cz/serialy/tutorial-vulkan/) - Czech language only, using vulkan.hpp, source code on [github](https://github.com/pc-john/VulkanTutorial).        `,
        }
    ]
};

const deviceList: ProjectPageType = {
    menuTitle: "1-1 - Device List",
    pageTitle: "1-1 - Device List",
    projectDescription: [
        {
            header: "1-1 - Device List",
            text: `
Vulkan is a low-level, low-overhead API for 3D graphics and computing. Currently, it is probably the most important APIs in its area.

Vulkan history and design

Vulkan 1.0 was released in 2016. It is almost 25 years after the first version of OpenGL. On the beginning of 90', graphics cards were - if we simplify it - only a piece of memory with monitor output. Whatever was written to the memory appeared on the screen. Today in 2024, a main stream graphics card is programmable, massively parallel compute unit. When comparing computing power, it might outperform tens, hundreds, or even thousands of traditional processors in extreme cases. Vulkan is designed with the focus on effective use of the performance potential that is hidden in the graphics cards of today.

The other view: 25 years before Vulkan 1.0, almost all computers had only one processor capable of executing a single thread at a time. This corresponds to a single active OpenGL context per thread. This was logical design for these old times, but it does not fit well in our reality. Today, standard computer contains multi-core processor capable of executing many threads simultaneously. Executing of tens of threads in parallel is not an exception. No wonder that Vulkan is designed to be able to take advantage of multi-threaded programming and parallel processing by many cores of the processor. And not only multi-core processing is in Vulkan design focus, but also multiple graphics cards can be handled by Vulkan natively.

OpenGL has high overhead for some operations and its driver is very complex. On the other side, Vulkan is low-level API with low overhead and relatively simple driver. Simple driver usually results in much less driver bugs and better driver and system stability.

OpenGL is platform neutral, but faced difficulties anyway. On macOS, it was always number of versions behind the standard. On mobile devices, usually only OpenGL ES was supported. When looking on Vulkan, it is supported on macOS (through MoltenVk) and majority of modern tablets and mobile phones.

Vulkan is amazing by its low-level approach, because we can work very efficiently with underlying hardware and optimize our code in many details. However, it has also its downsides. Few lines of OpenGL code might need tens or even hundreds lines of code when using Vulkan. Low-level Vulkan code brings new flexibility. But many programmers might feel unprepared to deal with such amount of low-level code and to understand it. And exactly to this situation comes this tutorial - to make an attempt to help and to introduce a programmer into basics of Vulkan programming.

In our tutorial, we will use modern C++20 or newer. Normally, we would use Vulkan C++ binding called [Vulkan-Hpp](https://github.com/KhronosGroup/Vulkan-Hpp). However, Vulkan-Hpp has some design limitations which advanced users might struggle with from time to time, but most importantly, the current version 1.3.283 takes about quarter of million lines of code that must be included and processed by the compiler. It takes roughly about 3-4 seconds to process such large headers by a modern processor of today. Another Vulkan-Hpp limitation is memory overhead of Unique_* and raii classes. Both mentioned issues are solved by vkg Vulkan binding. Vkg means Vulkan generated. Being generated, its another advantage is that not used parts of the API can be switched off and omitted from vkg.h and vkg.cpp. This results in a smaller API, a little smaller output binary, and usually less function pointers which, in turn, results in a little better cache effectivity.

Now a little controversial thing: C++ exceptions. While not being expert on C++ effectivity, my experiments show that using exceptions results in higher application performance and make code shorter and more readable. The reason seems to be simple: The use of exceptions removes much of the error handling logic from our code. The error status does not need to be returned from subrutine to current rutine and from the current rutine to parent rutine. And each routine level might require some condition logic to handle error conditions, incuring extra overhead even if no error was returned. Having exceptions, all this error condition logic and overhead might be removed, making the code faster and more readable. Instead of the error handling code, the task is handled by exceptions. Many compilers implement them by tables that control the process of exception handling. In other words, the error handling functionality is moved from our code into the tables, making our code faster and cleaner. The tables might make executables a little bigger, some say by 20%, but what usually matters is performance and speed of development.

Other people might argue that raising of an exception is very slow, thus exceptions shall not be used. My opinion is following: exception is related to the word exceptional. So, it is raised in exceptional situations like write failed because disk is full or Vulkan command failed because operating system restarted GPU driver. Such situations may be handled by showing message dialog and by terminating of the application. Who cares that the message dialog appeared few microseconds later? The system will probably wait couple of seconds anyway before the user clicks Ok. Or, who cares that an application termination took couple of microseconds more? What usually interests us is application performance and code readability, not the handling of exceptional circumstances that are often handled by application termination or other serious actions.

The first application: Instance and listing of physical devices

The code for all the examples can be downloaded from git repository [https://github.com/Vulkan-FIT/VulkanTutorial](https://github.com/Vulkan-FIT/VulkanTutorial).

Our first Vulkan application will print names of all Vulkan physical devices installed in the given system. We will do it in five steps:

vk::loadLib() - loads Vulkan library vk::createInstance() - creates global Vulkan instance object vk::enumeratePhysicalDevices() - gets list of physical devices vk::getPhysicalDeviceProperties() - gets properties of each physical device print device name

And we have to wrap our code to catch exceptions if one is raised:

---
vkg
\`\`\`
int main(int, char**)
{
\t// catch exceptions
\t// (vk functions throw if they fail)
\ttry {

\t\t// load Vulkan library
\t\tvk::loadLib();

\t\t// Vulkan instance
\t\tvk::createInstance(
\t\t\tvk::InstanceCreateInfo{
\t\t\t\t.sType = vk::STRUCTURE_TYPE_LOADER_INSTANCE_CREATE_INFO,
\t\t\t\t.pNext = nullptr,
\t\t\t\t.flags = 0,
\t\t\t\t.pApplicationInfo =
\t\t\t\t\t&(const vk::ApplicationInfo&)vk::ApplicationInfo{
\t\t\t\t\t\t.sType = vk::STRUCTURE_TYPE_APPLICATION_INFO,
\t\t\t\t\t\t.pNext = nullptr,
\t\t\t\t\t\t.pApplicationName = "1-1-DeviceList",
\t\t\t\t\t\t.applicationVersion = 0,
\t\t\t\t\t\t.pEngineName = nullptr,
\t\t\t\t\t\t.engineVersion = 0,
\t\t\t\t\t\t.apiVersion = vk::apiVersion1_0,
\t\t\t\t\t},
\t\t\t\t.enabledLayerCount = 0,
\t\t\t\t.ppEnabledLayerNames = nullptr,
\t\t\t\t.enabledExtensionCount = 0,
\t\t\t\t.ppEnabledExtensionNames = nullptr,
\t\t\t});

\t\t// print device list
\t\tvk::Vector<vk::PhysicalDevice> deviceList = vk::enumeratePhysicalDevices();
\t\tcout << "Physical devices:" << endl;
\t\tfor(size_t i=0; i<deviceList.size(); i++) {
\t\t\tvk::PhysicalDeviceProperties p = vk::getPhysicalDeviceProperties(deviceList[i]);
\t\t\tcout << "   " << p.deviceName << endl;
\t\t}

\t// catch exceptions
\t} catch(vk::Error& e) {
\t\tcout << "Failed because of Vulkan exception: " << e.what() << endl;
\t} catch(exception& e) {
\t\tcout << "Failed because of exception: " << e.what() << endl;
\t} catch(...) {
\t\tcout << "Failed because of unspecified exception." << endl;
\t}

\treturn 0;
}

\`\`\`
---
Vulkan-Hpp
\`\`\`
#include using namespace std;


int main(int, char\*\*)
{
\t// catch exceptions
\t// (vulkan.hpp functions throw if they fail)
\ttry {

\t\t// Vulkan instance
\t\tvk::UniqueInstance instance(
\t\t\tvk::createInstanceUnique(
\t\t\t\tvk::InstanceCreateInfo{
\t\t\t\t\tvk::InstanceCreateFlags(),  // flags
\t\t\t\t\t&(const vk::ApplicationInfo&)vk::ApplicationInfo{
\t\t\t\t\t\t"1-1-DeviceList",         // application name
\t\t\t\t\t\tVK_MAKE_VERSION(0,0,0),  // application version
\t\t\t\t\t\tnullptr,                 // engine name
\t\t\t\t\t\tVK_MAKE_VERSION(0,0,0),  // engine version
\t\t\t\t\t\tVK_API_VERSION_1_0,      // api version
\t\t\t\t\t},
\t\t\t\t\t0,        // enabled layer count
\t\t\t\t\tnullptr,  // enabled layer names
\t\t\t\t\t0,        // enabled extension count
\t\t\t\t\tnullptr,  // enabled extension names
\t\t\t\t}));

\t\t// print device list
\t\tvector deviceList = instance->enumeratePhysicalDevices();
\t\tcout << "Physical devices:" << endl;
\t\tfor(vk::PhysicalDevice pd : deviceList) {
\t\t\tvk::PhysicalDeviceProperties p = pd.getProperties();
\t\t\tcout << "   " << p.deviceName << endl;
\t\t}

\t// catch exceptions
\t} catch(vk::Error& e) {
\t\tcout << "Failed because of Vulkan exception: " << e.what() << endl;
\t} catch(exception& e) {
\t\tcout << "Failed because of exception: " << e.what() << endl;
\t} catch(...) {
\t\tcout << "Failed because of unspecified exception." << endl;
\t}

\treturn 0;
}
\`\`\`
---
The first thing that might catch our eyes in the code is large initialization of structures vk::InstanceCreateInfo and vk::ApplicationInfo. And that is the way Vulkan uses to communicate most of the data: through structures. We fill the data into the structures and pass them through Vulkan functions. Most of the structures have sType (structure type) member indicating type of the structure and pNext member. The pNext member must be null or it must point to another valid Vulkan structure which might be a structure from a new extension or a kind of a new functionality.

The strange type cast \`&(const vk::ApplicationInfo&)vk::ApplicationInfo{\` just avoids the harmless warning about using pointer to temporary variable.

Documentation to all the structures and the whole Vulkan can be found on [Khronos website](https://registry.khronos.org/vulkan/). I recommend the latest Vulkan specification while there are three versions - core API only, core + ratified extensions and core + all published extensions. I recommend core + ratified extensions, or core only specification. Core + all published extensions contains much of content related to various vendor extensions which might be misleading and might make it more difficult to understand Vulkan.

Detailed code description

**vk::loadLib()** - loads Vulkan library. The function loads vulkan-1.dll on Windows and libvulkan.so.1 on Linux. Then, it initializes some global Vulkan function pointers.

**vk::createInstance()** - creates Vulkan instance. Instance stores all global per-application state. Before we can use Vulkan, Vulkan Instance must be created. There are only few functions that can be used before creating Vulkan Instance. Once it is created, we can retrive it using vk::instance() function.

To create instance, we need to fill vk::InstanceCreateInfo structure with data. We have to set sType and pNext members. The flags member is empty. The first interesting member is pApplicationInfo. It is pointer to vk::ApplicationInfo structure. So, we create vk::ApplicationInfo and fill it with the data as well.

Again, we initialize sType and pNext members. The pApplicationName is the name of our application. Together with applicationVersion it can be used to optimize the driver for particular application or application version, or even to workaround problems with particular application or its version. We provide application name but we will supply 0 for the application version.

The same idea stands behind pEngineName and engineVersion. The driver might turn on optimizations or workarounds for particular engine or engine version. We do not use any engine, so we pass null and zero.

The last member is apiVersion. It is the highest version that our application might use. To put it in other words, our application makes promise here to not use higher version that it specifies here. The driver might not support so high version, but this does not result in error. The driver supported version is reported elsewhere. Here it is about the promise of the application to not use functionality of higher version of Vulkan than it specifies in apiVersion member.

Now, we return back to vk::InstanceCreateVersion and to its last four members. They are related to layers and extensions. We will speak about layers and extensions on other occasions. For now, because we are not using any layers and any extensions, we just set them to null and their count to zero.

**vk::enumeratePhysicalDevices()** - returns the list of physical devices available in the system. Each physical device is represented by vk::PhysicalDevice handle.

We can download the source code, configure it by CMake, compile it and run it. I recommend CMake 3.21 or newer. The code was tested with g++ compiler on Linux and Microsoft Visual C++ 2022. We also need Vulkan drivers installed on the target system.

When we run the code we might see the following output:

---
\`\`\`
Physical devices:
   NVIDIA GeForce RTX 4090
   AMD Radeon RX 7900 XTX
   Intel(R) UHD Graphics 630
   llvmpipe (LLVM 15.0.7, 256 bits)
\`\`\`
---

We can see number of graphics cards. Depending on our system, we will usually see one or two devices. Here, we see Nvidia and AMD graphics as first two graphics cards. So, the user is probably developer who wants to test his applications on various graphics cards and various vendors. There is also integrated Intel graphics. The last one is llvmpipe that I often see on Linux. It is software implementation of Vulkan. It is useful on some special circumstances.

If you see some error instead of graphics card list, there might be some problem on the computer. We shall fix it in the next article.
            `, relatedContent: [
                {
                    label: "Next part of the tutorial",
                    links: [
                        {
                            label: "1-2 - Development Tools",
                            link: `/${VULKAN_DOSSIER_PATHNAME}/detail/developmentTools`
                        }
                    ]
                }
            ]
        }
    ]
}

const developmentTools: ProjectPageType = {
    menuTitle: "1-2 - Development Tools",
    pageTitle: "1-2 - Development Tools",
    projectDescription: [
        {
            header: "1-2 - Development Tools",
            text: `Number of valuable tools and utilities exist that might help us during application development and 
finally with its deployment on target computers. We will start with those that we can use immediately for testing of our 
application of the previous article that initializes Vulkan instance and prints out all Vulkan devices available.

### Windows Sandbox

Windows Sandbox is a very useful tool to test our application on pristine Windows installation. Each time Windows Sandbox is started, it opens a virtual machine with the pristine Windows installation. After Windows Sandbox is closed, all the changes made inside it are lost.

So, we can take our application of the previous article, put it inside Windows Sandbox and run it. If we provided all required DLLs with our application and if we set up our Windows Sandbox properly, we shall see the result similar to the following one:

![](Sandbox-vGPU+CPU-Vulkan-drivers-960.png) More details on Windows Sandbox installation and usage

When making a release of an application, we need to make sure that the application will run on other computers. Not just on the one that was used for development. Other computers might have different set of libraries and packages installed and often many libraries and packages are missing, compared to our development computer. To find all statically linked DLLs of our application, we can use, for instance, [DependencyWalker](https://www.dependencywalker.com) or its modern alternative [Dependencies](https://github.com/lucasg/Dependencies). And to make a final test, we can use Windows Sandbox. Windows Sandbox provides pristine Windows installation each time we start it, so we can run our application there and see if it runs or some libraries are missing.

Because applications are using different set of libraries on Windows we need to make sure that we included all of them with our executable. Otherwise, application might not run, for instance, on computers that does not have Visual C++ installed. Visual C++ brings some libraries with itself and these might be missing on other computers. Thus, Windows Sandbox might be perfect testing environment for this problem.

To enable Windows Sandbox, you might need Pro or Enterprise version of Windows 10 or 11. It might not be available on Home editions. More detailed requirements can be found on internet. To enable it on Windows 11, go to: Settings -> Apps -> Optional features -> More Windows features and check "Windows Sandbox". For Windows 10, use Settings -> Apps -> Apps & features -> Programs and Features -> Turn Windows features on or off and check "Windows Sandbox".

After enabling Windows Sandbox, we can find it in our start menu. After running it, we get new pristine Windows running in isolation from our Windows. To test our Vulkan application, we need to copy its executable built in release configuration into the Sandbox. You can select it and press Ctrl+C on files you want to copy from your machine. Then, you can click, for instance, on Sandbox desktop and Ctrl+V will paste the files into Sandbox.

We might also need MSVC runtime libraries. When using MSVC 2022, their names are probably msvcp140.dll, vcruntime140.dll and vcruntime140_1.dll. We can get them from MSVC installation folder or download them from [Microsoft website](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170). Finally, we will need vulkan-1.dll. If we have graphics drivers installed, it can probably be found in Windows\\system32 folder.

After copying all the necessary files, we can open command prompt in the Sandbox, for instance, by opening Start menu and typing cmd. If we copied files to the desktop, we just cd into the folder, type executable name and run it, as is shown bellow:

![](https://vulkan-fit.github.io/VulkanTutorial/1-2-DevelopmentTools/Sandbox-no-Vulkan-driver-960.png)

However, we see Vulkan error that says "incompatible driver". It tells us there is not a single compatible Vulkan driver installed in the system, which might means that there is no Vulkan driver at all. To get working Vulkan driver, we can install CPU driver, or we can allow Windows Sandbox to use Vulkan device of the host operating system, for instance.

To allow Windows Sandbox to use Vulkan device of the host operating system, we need to create a file on the host operating system with the following content:

---
\`\`\`
<Configuration>
\t<vGPU>Enable</vGPU>
</Configuration>
\`\`\`
---

We can name it, for instance, "Windows Sandbox with vGPU.wsb". The suffix wsb is important. After the clicking on the file, it is opened by Windows Sandbox. Windows Sandbox reads the configuration file and starts with virtualized GPU. In other words, our Sandbox now looks like it uses graphics card of the host operating system.

Another approach is to install Vulkan CPU driver named lavapipe that is part of [Mesa 3D](https://www.mesa3d.org). We can download Mesa 3D compiled binaries for Windows from [https://github.com/pal1000/mesa-dist-win](https://github.com/pal1000/mesa-dist-win). In the [releases section](https://github.com/pal1000/mesa-dist-win/releases), there are binaries built by MSVC and MinGW. Both of them should work well. Among the available downloads, I suggest to take the one with "release" in the name and to skip all "debug" and "devel" versions. After opening the downloaded zip, we need to find vulkan_lvp.dll and lvp_icd.x86_64.json. We can copy both files into the Windows Sandbox desktop and execute the following command in the command prompt:

reg add "HKEY_LOCAL_MACHINE\\SOFTWARE\\Khronos\\Vulkan\\Drivers" /v "C:\\Users\\WDAGUtilityAccount\\Desktop\\lvp_icd.x86_64.json" /t REG_DWORD /d 0 /f

Or, we can create bat file for the command above for easy driver registering each time we need it. After executing the command, Windows registry contains the reference to lvp_icd.x86_64.json file. The json file carries the info about the driver stored in vulkan_lvp.dll. Now, we should have working Vulkan:

![](https://vulkan-fit.github.io/VulkanTutorial/1-2-DevelopmentTools/Sandbox-vGPU+CPU-Vulkan-drivers-960.png)

In the screenshot, we can see Intel UHD Graphics that is connected to the real Intel graphics card in the host operating system. For some reason probably known to Microsoft it appears three times. The second Vulkan physical device is llvmpipe. It is CPU Vulkan implementation installed as described above. Now we have working Vulkan testing environment in Windows Sandbox.

### Vulkan Validation Layers

Another way to test our application are Vulkan Validation Layers (VVL). Vulkan Validation Layers (VVL) stays between our application and Vulkan implementation and perform validation of Vulkan API calls. In other words, VVL checks for the correct Vulkan API usage. Vulkan is designed for performance, so it is not expected to waste computing resources on checking of the correct API usage. Instead, VVL are usually activated only by the developer using vkconfig tool that simplifies their setup using relatively simple GUI:

![](https://vulkan-fit.github.io/VulkanTutorial/1-2-DevelopmentTools/vkconfig-gui.png)

More on Vulkan Validation Layers and vkconfig

Vulkan Validation Layers are part of Vulkan SDK. So, we can [download Vulkan SDK](https://vulkan.lunarg.com/sdk/home) for our platform and install it. On Linux, it is possible that packages for Vulkan Validation Layers and vkconfig exist for our Linux distribution. I usually had problem that vkconfig was not present in the packages.

Once we have the things on place, we can use vkconfig utility. On Windows, we can go to Start and type vkconfig or find Vulkan Configurator in the menu. On Linux, typing vkconfig in the console might be the way, or it may appear also in your Start menu of your Linux desktop.

Long info about the usage can be found in [vkconfig README.md](https://github.com/LunarG/VulkanTools/blob/main/vkconfig/README.md). For us, the most essential settings are in top-left part called "Vulkan Layers Management". We need the option "Overriding Layers by the Vulkan Configurator" to be selected. In the left center part called "Vulkan Layers Configurations", we need "Validation" to be selected. Finally in the right part, "Validation Settings" should be shown allowing us to customize them.

I usually enable as much as possible options in "Validation Areas" section. The exception might be some options that give me some troubles for some reason. One big exception also includes "Best Practices". They are useful to some extent, but I usually keep them off. The option "GPU base" I keep usually set to GPU-Assisted except when I need printf functionality from the shaders.

For Visual C++ debugger, I suggest to set the following options:

![](https://vulkan-fit.github.io/VulkanTutorial/1-2-DevelopmentTools/vkconfig-MSVC-settings.png)

The option "Log Message" enables printing of validation messages into the console for console applications. "Debug Output" option makes messages appear in Output Window inside Visual C++ IDE. "Break" option makes the Visual C++ debugger to stop when Validation Layer message is emitted.

When we run the application again with Validation Layers, we shall see the following output:

![](https://vulkan-fit.github.io/VulkanTutorial/1-2-DevelopmentTools/validation-info.png)

The application give us the first validation message. In this case, it is just an info that Vulkan Validation Layers are active. If it disturb us, we can mute the message inside vkconfig by adding its VUID taken from the message itself:

![](https://vulkan-fit.github.io/VulkanTutorial/1-2-DevelopmentTools/vkconfig-mute-message.png)

Now, Vulkan Validation Layers run as expected. We can test them by intentionally introduce an error in the code. We might "mistakenly" type vk::STRUCTURE_TYPE_**LOADER**_INSTANCE_CREATE_INFO instead of vk::STRUCTURE_TYPE_INSTANCE_CREATE_INFO:

---
\`\`\`
\t\t\tvk::InstanceCreateInfo{
\t\t\t\t.sType = vk::STRUCTURE_TYPE_LOADER_INSTANCE_CREATE_INFO,
\t\t\t\t.pNext = nullptr,
\`\`\`
---

This is obviously error. Validation Layers will immediately discover it:

![](https://vulkan-fit.github.io/VulkanTutorial/1-2-DevelopmentTools/validation-error.png)

The code might still run well, but depending on driver implementation, it might crash on another computer. So, we should definitely fix it. Applications are expected to use Vulkan API correctly, otherwise the behaviour is undefined.

### Valgrind

Wrong memory access is often very difficult to debug. Even if the application behaviour is seemingly perfect, it is useful to make sure that there are no memory access issues that might bite us when some new conditions are met. [Valgrind](https://valgrind.org) is perfect tool for that. Unfortunately, it is only for Linux.

Valgrind translates the program into its own form and appends all kinds of memory access checks including reading and writing before or after allocated memory, reading and writing to already freed memory, reading of uninitialized memory, detecting of memory leaks, and so on.

After running valgrind on our application we can see the output:

---
\`\`\`
valgrind --tool=memcheck ...exeName...
...output...
\`\`\`
---

In other words, there is no wrong memory

More details on valgrind

Many distributions provide packages for Valgrind. After installing it, we can run it by:

---
\`\`\`
valgrind --tool=memcheck <name of our application>
\`\`\`
---

Valgrind might report many errors, some of them from system libraries or from drivers. Because we usually do not want to deal with system libraries or drivers, we can generate suppression file and use it to ignore these errors. We can also tweak depth of call stack printed for us, and so on. Some useful options might be: --num-callers=100, --error-limit=no, --gen-suppressions=yes or --suppressions=<filename of suppression file>.

Sometimes, Valgrind is extremely valuable tool.

### Other tools

Much more tools exist. If one is interested, he might take a look on Nvidia Nsight, for instance, or on [Vulkan Hardware Capability Viewer](https://github.com/SaschaWillems/VulkanCapsViewer) (vulkanCapsViewer) that is part of Vulkan SDK, or one of the tools on [vulkan.org -> Tools -> Profiling and debugging](https://vulkan.org/tools#profilers-and-debuggers).
            `, relatedContent: [
                {
                    label: "Previous part of the tutorial",
                    links: [
                        {
                            label: "1-1 - Device List",
                            link: `/${VULKAN_DOSSIER_PATHNAME}/detail/deviceList`
                        }
                    ]
                },
                {
                    label: "Next part of the tutorial",
                    links: [
                        {
                            label: "1-3 - Development Tools",
                            link: `/${VULKAN_DOSSIER_PATHNAME}/detail/deviceInfo`
                        }
                    ]
                }
            ]
        }
    ]
}

const deviceInfo: ProjectPageType = {
    menuTitle: "1-3 - Device Info",
    pageTitle: "1-3 - Device Info",
    projectDescription: [
        {
            header: "1-3 - Device Info",
            text: `
Each Vulkan device has its own properties, feature set, limits, set of supported extensions and so on. We can query maximum texture resolution, find out if geometry shader is supported, if we can use double or half precision computations, or whether particular image format is supported on the given physical device. We can also get supported Vulkan version and list of extensions.

If you run 1-3-DeviceInfo example, you can see the output similar to the following one:

---
\`\`\`
Vulkan instance:
   Version: 1.3.275
Vulkan devices:
   Quadro RTX 3000
      Vulkan version:  1.3.277
      Device type:     DiscreteGpu
      VendorID:        0x10de
      DeviceID:        0x1f36
      MaxTextureSize:  32768
      Geometry shader:   supported
      Double precision:  supported
      Memory heaps:
         0: 5955MiB  (device local)
         1: 16200MiB
         2: 214MiB  (device local)
      Queue families:
         0: gct  (count: 16)
         1: t  (count: 2)
         2: ct  (count: 8)
         3: t  (count: 3)
         4: t  (count: 1)
      Format support for images with optimal tiling:
         R8G8B8A8Srgb:        yes
         R8G8B8Srgb:          no
         R16G16B16A16Sfloat:  yes
         R16G16B16Sfloat:     no
\`\`\`
---

We can see various information about the Vulkan instance and device. How to get all this information?

Vulkan provides number of query functions that return much of information in number of structures. Quick overview can be found in the following text:

vk::enumerateInstanceVersion() returns instance version as uint32_t

---
\`\`\`
Vulkan instance:   
   Version: 1.3.275
\`\`\`
---

vk::getPhysicalDeviceProperties() returns vk::PhysicalDeviceProperties structure

---
\`\`\`
Vulkan devices:
   Quadro RTX 3000
      Vulkan version: 1.3.277
      Device type: DiscreteGpu
      VendorID: 0x10de
      DeviceID: 0x1f36
      MaxTextureSize: 32768
\`\`\`
---

\`VkPhysicalDeviceProperties::deviceName   VkPhysicalDeviceProperties::apiVersion   VkPhysicalDeviceProperties::deviceType   VkPhysicalDeviceProperties::vendorID   VkPhysicalDeviceProperties::deviceID   VkPhysicalDeviceProperties::limits::maxImageDimension2D\`

vk::getPhysicalDeviceFeatures() returns vk::PhysicalDeviceFeatures structure

---
\`\`\`
      Geometry shader: supported
      Double precision: supported
\`\`\`
---

\`VkPhysicalDeviceFeatures::geometryShader   VkPhysicalDeviceFeatures::shaderFloat64\`

vk::getPhysicalDeviceMemoryProperties() returns vk::PhysicalDeviceMemoryProperties structure

---
\`\`\`
   Memory heaps:
      0: 5955MiB (device local)
      1: 16200MiB
      2: 214MiB (device local)
\`\`\`
---

\`vk::PhysicalDeviceMemoryProperties::memoryHeapCount   vk::PhysicalDeviceMemoryProperties::memoryHeaps\`

vk::getPhysicalDeviceQueueFamilyProperties() returns vk::QueueFamilyProperties structure

---
\`\`\`
   Queue families:
      0: gct (count: 16)
      1: t (count: 2)
      2: ct (count: 8)
      3: t (count: 3)
      4: t (count: 1)
\`\`\`
---

\`vk::QueueFamilyProperties::queueFlags   vk::QueueFamilyProperties::queueCount\`

vk::getPhysicalDeviceFormatProperties() returns vk::FormatProperties structure

---
\`\`\`
      Format support for [...]:
         R8G8B8A8Srgb:        yes
         R8G8B8Srgb:          no
         R16G16B16A16Sfloat:  yes
         R16G16B16Sfloat:     no
\`\`\`
---

\`vk::FormatProperties::optimalTilingFeatures\`

### Instance version

To get Vulkan instance version, vk::enumerateInstanceVersion() function is used:

---
\`\`\`
// instance version
uint32_t instanceVersion = vk::enumerateInstanceVersion();
cout << "Vulkan instance:\\n"
     << "   Version:  " << vk::apiVersionMajor(instanceVersion) << "."
     << vk::apiVersionMinor(instanceVersion) << "." << vk::apiVersionPatch(instanceVersion) << endl;
\`\`\`
---

As we can see, the version is returned as uint32_t. Then, major, minor and patch versions are extracted from particular bits of uint32_t value by vk::apiVersion[Major|Minor|Patch]() functions.

Instance version tells us about the functionality that is provided by Vulkan instance. For example, version 1.0 might be too low for many applications, while 1.1 is quite ok in many cases.

One note: vkEnumerateInstanceVersion() was introduced by Vulkan 1.1. So, if the function is absent, the instance version is 1.0. For the sake of convenience, vkg hides this technical detail and vk::enumerateInstanceVersion() always returns valid instance version, even in the case of version 1.0.

### Device properties

Vulkan 1.0 stores device properties in vk::PhysicalDeviceProperties structure. We can find device name there, device type (integrated/discrete/...), Vulkan version of the device, various device limits in nested structure vk::PhysicalDeviceLimits, and so on.

To get the properties, vk::getPhysicalDeviceProperties() function can be used:

---
\`\`\`
// device properties
vk::PhysicalDeviceProperties properties = vk::getPhysicalDeviceProperties(pd);
cout << "   " << properties.deviceName << endl;

// device Vulkan version
cout << "      Vulkan version:  " << vk::apiVersionMajor(properties.apiVersion) << "."
     << vk::apiVersionMinor(properties.apiVersion) << "." << vk::apiVersionPatch(properties.apiVersion) << endl;

// device type
const char\* s;
switch(properties.deviceType) {
case vk::PhysicalDeviceType::eIntegratedGpu: s = "IntegratedGpu"; break;
case vk::PhysicalDeviceType::eDiscreteGpu:   s = "DiscreteGpu"; break;
case vk::PhysicalDeviceType::eVirtualGpu:    s = "VirtualGpu"; break;
case vk::PhysicalDeviceType::eCpu:           s = "Cpu"; break;
default: s = "Other";
}
cout << "      Device type:     " << s << endl;

// VendorID and DeviceID
cout << "      VendorID:        0x" << hex << properties.vendorID << endl;
cout << "      DeviceID:        0x" << properties.deviceID << dec << endl;

// device limits
cout << "      MaxTextureSize:  " << properties.limits.maxImageDimension2D << endl;
\`\`\`
---

More info can be found in the Vulkan specification.

### Device features

Device features are functionalities not necessarily supported on all devices. Some functionalities might be supported but others do not. Moreover, we must explicitly enable each feature before use.

---
\`\`\`
// device features
vk::PhysicalDeviceFeatures features = vk::getPhysicalDeviceFeatures(pd);
cout << "      Geometry shader:   ";
if(features.geometryShader)
\tcout << "supported" << endl;
else
\tcout << "not supported" << endl;
cout << "      Double precision:  ";
if(features.shaderFloat64)
\tcout << "supported" << endl;
else
\tcout << "not supported" << endl;
\`\`\`
---

More queryable features of Vulkan 1.0 are described in vk::PhysicalDeviceFeatures structure documentation.

### Device memory properties

Vulkan distinguishes between device memory and host memory. The device memory is usually the one on graphics card and host memory is usually plugged into the motherboard close to the processor. No wonder that device can usually access its graphic memory very efficiently while access to the host memory on the motherboard might be more complicated and slower. The same for the processor - its access to graphics card memory might be more complicated and slower than to the memory on the motherboard. Interesting situation appears on integrated graphics solutions where device memory and host memory might be the same physical memory.

To get information about the memory configuration on given system, vk::getPhysicalDeviceMemoryProperties() can be used:

---
\`\`\`
cout << "      Memory heaps:" << endl;
vk::PhysicalDeviceMemoryProperties memoryProperties = vk::getPhysicalDeviceMemoryProperties(pd);
for(uint32_t i=0, c=memoryProperties.memoryHeapCount; i<c; i++) {
\tvk::MemoryHeap& h = memoryProperties.memoryHeaps[i];
\tcout << "         " << i << ": " << h.size/1024/1024 << "MiB";
\tif(h.flags & vk::MemoryHeapFlagBits::eDeviceLocal)
\t\tcout << "  (device local)";
\tcout << endl;
}
\`\`\`
---

### Device queue family properties

Device queues execute commands submitted for execution on particular device and by particular queue. They are organized into families. Each family has the same properties and the same functionality. We can list queue families as follows:

---
\`\`\`
cout << "      Queue families:" << endl;
vk::Vector queueFamilyList = vk::getPhysicalDeviceQueueFamilyProperties(pd);
for(uint32_t i=0, c=uint32_t(queueFamilyList.size()); i<c; i++) {
\tcout << "         " << i << ": ";
\tvk::QueueFamilyProperties& queueFamilyProperties = queueFamilyList[i];
\tif(queueFamilyProperties.queueFlags & vk::QueueFlagBits::eGraphics)
\t\tcout << "g";
\tif(queueFamilyProperties.queueFlags & vk::QueueFlagBits::eCompute)
\t\tcout << "c";
\tif(queueFamilyProperties.queueFlags & vk::QueueFlagBits::eTransfer)
\t\tcout << "t";
\tcout << "  (count: " << queueFamilyProperties.queueCount << ")" << endl;
}
\`\`\`
---

We output family index followed by letters g,c and t. These letters indicate graphics, compute and transfer capability. So, we might have queues just for graphics, just for compute or for both. Some of the families might support transfer capability as well. Finally, we output number of the queues in the given family.

### Device format properties

Buffers and images use various formats for their data. To find our if particular format is supported on the device, we can use vk::getPhysicalDeviceFormatProperties().

For example, to find out if we can render into R8G8B8A8Srgb format, we can use following code:

---
\`\`\`
cout << "      Format support for rendering into images with optimal tiling:" << endl;
vk::FormatProperties formatProperties = vk::getPhysicalDeviceFormatProperties(pd, vk::Format::eR8G8B8A8Srgb);
if(formatProperties.optimalTilingFeatures & vk::FormatFeatureFlagBits::eColorAttachment)
\tcout << "         R8G8B8A8Srgb:        yes" << endl;
else
\tcout << "         R8G8B8A8Srgb:        no" << endl;
\`\`\`
---

As the result, we get vk::FormatProperties structure that contains few variables full of bit flags that indicate support for various use cases. In our case, we are interested in eColorAttachment flag inside optimal tiling member. If the flag is set, we can render into image with R8G8B8A8Srgb format and optimal tiling.

For other formats, we use the same code:

---
\`\`\`
formatProperties = vk::getPhysicalDeviceFormatProperties(pd, vk::Format::eR8G8B8Srgb);
if(formatProperties.optimalTilingFeatures & vk::FormatFeatureFlagBits::eColorAttachment)
\tcout << "         R8G8B8Srgb:          yes" << endl;
else
\tcout << "         R8G8B8Srgb:          no" << endl;
formatProperties = vk::getPhysicalDeviceFormatProperties(pd, vk::Format::eR16G16B16A16Sfloat);
if(formatProperties.optimalTilingFeatures & vk::FormatFeatureFlagBits::eColorAttachment)
\tcout << "         R16G16B16A16Sfloat:  yes" << endl;
else
\tcout << "         R16G16B16A16Sfloat:  no" << endl;
formatProperties = vk::getPhysicalDeviceFormatProperties(pd, vk::Format::eR16G16B16Sfloat);
if(formatProperties.optimalTilingFeatures & vk::FormatFeatureFlagBits::eColorAttachment)
\tcout << "         R16G16B16Sfloat:     yes" << endl;
else
\tcout << "         R16G16B16Sfloat:     no" << endl;
\`\`\`
---

R8G8B8A8Srgb is a kind of standard rendering output for many applications. Its support is mandatory by Vulkan specification in Formats chapter. So, our test is actually superfluous. R8G8B8Srgb would be more memory efficient alternative while less memory bandwidth might sometimes improve the performance despite that fact that it is not 4-byte aligned. R8G8B8Srgb format support is optional and we have to test for it.

R16G16B16A16Sfloat is half float based format. It can be used to do HDR rendering. Its support is mandatory, at least for color attachment (e.g. for rendering output), so our test is again superfluous. R16G16B16Srgb is optional. So, we would need to test for its support before use.

### Other device query functions

Vulkan 1.0 supports few more query functions:

*   vkGetPhysicalDeviceImageFormatProperties() - useful for image creation
*   vkGetPhysicalDeviceSparseImageFormatProperties() - useful for sparse image creation
*   vkEnumerateDeviceExtensionProperties() - lists supported device extensions
*   vkEnumerateDeviceLayerProperties() - device layers are deprecated and they were probably never used seriously

In the case of interest, they are described in Vulkan specification. Concerning vkEnumerateDeviceExtensionProperties(), we will deal with the topic of device extensions in the next article.
            `, relatedContent: [
                {
                    label: "Previous part of the tutorial",
                    links: [
                        {
                            label: "1-2 - Development Tools",
                            link: `/${VULKAN_DOSSIER_PATHNAME}/detail/developmentTools`
                        }
                    ]
                },
                {
                    label: "Next part of the tutorial",
                    links: [
                        {
                            label: "1-4 - Advanced Info",
                            link: `/${VULKAN_DOSSIER_PATHNAME}/detail/advancedInfo`
                        }
                    ]
                }
            ]
        }
    ]
}

const advancedInfo: ProjectPageType = {
    menuTitle: "1-4 - Advanced Info",
    pageTitle: "1-4 - Advanced Info",
    projectDescription: [
        {
            header: "1-4 - Advanced Info",
            text: `
Vulkan is now much more capable than it was in the time of Vulkan 1.0 release in 2016. Some examples of new functionalities can be seen in the following output produced by the example code of this article. The new functionalities are marked by the red tint:

---
\`\`\`
Vulkan instance:
   **Version: 1.3.275
   Extensions (18 in total):
      VK_KHR_device_group_creation
      VK_KHR_external_fence_capabilities
      VK_KHR_external_memory_capabilities
      VK_KHR_external_semaphore_capabilities
      VK_KHR_get_physical_device_properties2
      VK_KHR_get_surface_capabilities2
      VK_KHR_surface
      VK_KHR_surface_protected_capabilities
      VK_KHR_win32_surface
      VK_EXT_debug_report
      VK_EXT_debug_utils
      VK_EXT_surface_maintenance1
      VK_EXT_swapchain_colorspace
      VK_NV_external_memory_capabilities
      VK_KHR_portability_enumeration
      VK_LUNARG_direct_driver_loading
      VK_EXT_layer_settings
      VK_EXT_validation_features**
Vulkan devices:
   Quadro RTX 3000
      Vulkan version:  1.3.277
      Device type:     DiscreteGpu
      VendorID:        0x10de
      DeviceID:        0x1f36
      **Device UUID:     e0e7b72b-a391-a141-9bbf-2059ba86ca79
      Driver name:     NVIDIA
      Driver info:     552.74**
      MaxTextureSize:  32768
      Geometry shader:     supported
      Double precision:    supported
      **Half precision:      supported
      Vulkan Video:        supported
      Vulkan Ray Tracing:  supported**
      Memory heaps:
         0: 5955MiB  (device local)
         1: 16200MiB
         2: 214MiB  (device local)
      Queue families:
         0: gcts  (count: 16)
         1: ts  (count: 2)
         2: cts  (count: 8)
         3: ts**v**  (count: 3, **decode H264, decode H265**)
         4: ts**v**  (count: 1)
      R8G8B8A8Srgb format support for color attachment:
         Images with linear tiling: no
         Images with optimal tiling: yes
         Buffers: no
      **Extensions (215 in total):  VK_KHR_16bit_storage, [...]**
\`\`\`
---

We can see new extensions for both - instance and devices. If list of extensions floods your screen too much, you might disable it by --no-extension-list. As we can see, the instance supports 18 extensions and the device 215. Out of the supported extension list, we can find out Vulkan video and Vulkan raytracing support:

---
\`\`\`
// supported extensions
vk::Vector extensionList =
\tvk::enumerateDeviceExtensionProperties(pd, nullptr);
bool videoQueueSupported = vk::isExtensionSupported(extensionList, "VK_KHR_video_queue") &&
                           instanceVersion >= vk::ApiVersion11;
bool raytracingSupported = vk::isExtensionSupported(extensionList, "VK_KHR_acceleration_structure") &&
                           vk::isExtensionSupported(extensionList, "VK_KHR_ray_tracing_pipeline") &&
                           vk::isExtensionSupported(extensionList, "VK_KHR_ray_query") &&
                           instanceVersion >= vk::ApiVersion11;

\`\`\`
---

The important rule is: Before we use some Vulkan functionality, we should make sure it is supported. The support can be provided by:

*   Vulkan core version - e.g. Vulkan 1.0, Vulkan 1.1, ...
*   Extension - such as VK_KHR_video_queue or VK_KHR_ray_query
*   Feature - such as double precision support - various features might or might not be supported by a particular device

Let's analyze the output of this article example:

---
\`\`\`
Vulkan instance:   
   Version:  1.3.275                       // query for instance version since instance version 1.1,
                                           // but emulated by vkg on Vulkan 1.0
   Extensions (18 in total):
      [...]                                // extension enumeration since Vulkan 1.0
Vulkan devices:   
   Quadro RTX 3000                         // Vulkan 1.0
      Vulkan version:  1.3.277             // Vulkan 1.0
      Device type:     DiscreteGpu         // Vulkan 1.0
      VendorID:        0x10de              // Vulkan 1.0
      DeviceID:        0x1f36              // Vulkan 1.0
      Device UUID:     e0e7b72b-a391-...   // device version 1.2, instance version 1.1
      Driver name:     NVIDIA              // device version 1.2, instance version 1.1
      Driver info:     552.74              // device version 1.2, instance version 1.1
      MaxTextureSize:  32768               // Vulkan 1.0
      Geometry shader:     supported       // optional, Vulkan 1.0
      Double precision:    supported       // optional, Vulkan 1.0
      Half precision:      supported       // optional, device version 1.2, instance version 1.1
      Vulkan Video:        supported       // VK_KHR_video_queue extension, instance version 1.1
      Vulkan Ray Tracing:  supported       // VK_KHR_acceleration_structure + VK_KHR_ray_tracing_pipeline +
                                           // VK_KHR_ray_query device extensions, instance version 1.1
      Memory heaps:
         0: 5955MiB  (device local)
         1: 16200MiB                       // Vulkan 1.0
         2: 214MiB  (device local)
      Queue families:
         0: gcts  (count: 16)
         1: ts  (count: 2)
         2: cts  (count: 8)                // queue info: Vulkan 1.0
         3: tsv  (count: 3, decode         //  video info: device version 1.1, instance version 1.1
                 H264, decode H265)
         4: tsv  (count: 1)
      Extensions (215 in total):  [...]    // Vulkan 1.0
\`\`\`
---

### Device properties

Vulkan 1.1 introduces vk::PhysicalDeviceProperties2 structure that allows for extending vk::PhysicalDeviceProperties by pNext pointer:

---
\`\`\`
struct PhysicalDeviceProperties2 {
\tStructureType               sType = StructureType::ePhysicalDeviceProperties2;
\tvoid\*                       pNext = nullptr;
\tPhysicalDeviceProperties    properties;
};
\`\`\`
---

Now, we can chain structures using pNext pointer. For example, pNext may point to vk::PhysicalDeviceVulkan12Properties or vk::PhysicalDeviceVulkan11Properties structure. Both of them were introduced by Vulkan 1.2, so we should include them in pNext chain only if the device version is at least 1.2. We start with getting device version:

---
\`\`\`
// get device properties
vk::PhysicalDeviceProperties2 properties2;
vk::PhysicalDeviceProperties& properties = properties2.properties;
properties = vk::getPhysicalDeviceProperties(pd);
\`\`\`
---

Now, we will do a little trick. If Vulkan instance is of version 1.0 only, we cannot use any device core functionality of Vulkan 1.1+. It is a historical limitation when Vulkan was very new and some functionality was not yet developed for instance. Such condition is indicated by vulkan10enforced boolean. When this boolean is set, we just reduce device version to 1.0. Using this trick we can skip all the further tests whether instance is at least 1.1 when dealing with device 1.1+ functionality:

---
\`\`\`
// limit device Vulkan version on Vulkan 1.0 instances
if(vulkan10enforced)
\tproperties.apiVersion = vk::ApiVersion10 | vk::apiVersionPatch(properties.apiVersion);
\`\`\`
---

Then, we create properties12 and properties11 and chain it with pNext pointers. We just omit structures that are not supported by the device:

---
\`\`\`
// extended device properties
vk::PhysicalDeviceVulkan12Properties properties12{  // requires Vulkan 1.2
\t.pNext = nullptr,
};
vk::PhysicalDeviceVulkan11Properties properties11{  // requires Vulkan 1.2 (really 1.2, not 1.1)
\t.pNext = &properties12,
};
if(properties.apiVersion >= vk::ApiVersion12)
\tproperties2.pNext = &properties11;
\`\`\`
---

Finally, if we are on Vulkan 1.1+, we call vk::getPhysicalDeviceProperties2(). It makes all the structures to be filled with the data:

---
\`\`\`
if(properties.apiVersion >= vk::ApiVersion11)
\tvk::getPhysicalDeviceProperties2(pd, properties2);

// device name
cout << "   " << properties.deviceName << endl;
\`\`\`
---

If we are on Vulkan 1.0 only, data pointed by properties variable is all the valid data we have. On Vulkan 1.2+, we can print additional info from vk::PhysicalDeviceVulkan11Properties and vk::PhysicalDeviceVulkan12Properties structures. For example, we can print device UUID to distinguish the same graphics cards in multi-gpu systems. We can print driver name and its info string, and so on:

---
\`\`\`
if(properties.apiVersion >= vk::ApiVersion12) {
\tcout << "      Driver name:     " << properties12.driverName << endl;
\tcout << "      Driver info:     " << properties12.driverInfo << endl;
}
else {
\tcout << "      Driver name:     < unknown >" << endl;
\tcout << "      Driver info:     < unknown >" << endl;
}
\`\`\`
---

### Device features

Vulkan 1.1+ features are retrieved in the similar way as properties:

---
\`\`\`
// device features
vk::PhysicalDeviceVulkan12Features features12{
\t.pNext = nullptr,
};
vk::PhysicalDeviceFeatures2 features2{
\t.pNext = (properties.apiVersion>=vk::ApiVersion12) ? &features12 : nullptr,
};
vk::PhysicalDeviceFeatures& features = features2.features;
if(properties.apiVersion >= vk::ApiVersion11)
\tvk::getPhysicalDeviceFeatures2(pd, features2);
else
\tfeatures = vk::getPhysicalDeviceFeatures(pd);
\`\`\`
---

Then, we can, for example, find out if half precision floats are supported:

---
\`\`\`
cout << "      Half precision:      ";
if(properties.apiVersion >= vk::ApiVersion12 && features12.shaderFloat16)
\tcout << "supported" << endl;
else
\tcout << "not supported" << endl;
\`\`\`
---

### Device queue family properties

To get extended info for queue families, we use vector of vk::QueueFamilyProperties2. Any additional info structures, such as vk::QueueFamilyVideoPropertiesKHR, use extra vector:

---
\`\`\`
// queue family properties
cout << "      Queue families:" << endl;
vk::Vector<vk::QueueFamilyProperties2> queueFamilyList;
vk::Vector<vk::QueueFamilyVideoPropertiesKHR> queueVideoPropertiesList;
if(properties.apiVersion >= vk::ApiVersion11)
\tqueueFamilyList = vk::getPhysicalDeviceQueueFamilyProperties2(
\t\tpd, queueVideoPropertiesList, videoQueueSupported);
else {
\tvk::Vector<vk::QueueFamilyProperties> v = vk::getPhysicalDeviceQueueFamilyProperties(pd);
\tqueueFamilyList.resize(v.size());
\tfor(size_t i=0; i<v.size(); i++)
\t\tqueueFamilyList[i].queueFamilyProperties = v[i];
}
\`\`\`
---

If we are on Vulkan 1.1+, we call vk::getPhysicalDeviceQueueFamilyProperties2. Otherwise, we use old Vulkan 1.0 function and copy the results from the old structures into the new ones.

Then, we can process the information about the queue families. The extension provided functionality is marked by bold text:

---
\`\`\`
for(uint32_t i=0, c=uint32_t(queueFamilyList.size()); i<c; i++) {
\tcout << "         " << i << ": ";
\tvk::QueueFamilyProperties& queueFamilyProperties = queueFamilyList[i].queueFamilyProperties;
\tif(queueFamilyProperties.queueFlags & vk::QueueFlagBits::eGraphics)
\t\tcout << "g";
\tif(queueFamilyProperties.queueFlags & vk::QueueFlagBits::eCompute)
\t\tcout << "c";
\tif(queueFamilyProperties.queueFlags & vk::QueueFlagBits::eTransfer)
\t\tcout << "t";
\tif(queueFamilyProperties.queueFlags & vk::QueueFlagBits::eSparseBinding)
\t\tcout << "s";
\t**if(queueFamilyProperties.queueFlags & (vk::QueueFlagBits::eVideoDecodeKHR | vk::QueueFlagBits::eVideoEncodeKHR))
\t\tcout << "v";**
\tcout << "  (count: " << queueFamilyProperties.queueCount;
\t**if(videoQueueSupported) {
\t\tif(queueVideoPropertiesList[i].videoCodecOperations & vk::VideoCodecOperationFlagBitsKHR::eDecodeH264)
\t\t\tcout << ", decode H264";
\t\tif(queueVideoPropertiesList[i].videoCodecOperations & vk::VideoCodecOperationFlagBitsKHR::eDecodeH265)
\t\t\tcout << ", decode H265";
\t\tif(queueVideoPropertiesList[i].videoCodecOperations & vk::VideoCodecOperationFlagBitsKHR::eDecodeAV1)
\t\t\tcout << ", decode AV1";
\t}**
\tcout << ")" << endl;
}
\`\`\`
---

### Device format properties

We can test, for example, for compressed texture support. The compressed textures reduce memory consumption, lower bandwidth, but might reduce visual quality. Memory consumption and bandwidth requirements might be of issue for example, on mobile devices. But checking of the visual quality of compressed textures might be useful.

As of 2025, we can query for these Vulkan core formats:

*   Block-Compressed image formats (BC1 to BC7)
*   ETC compressed formats (ETC2 and EAC)
*   ASTC LDR formats (since Vulkan 1.0)
*   ASTC HDR formats (since Vulkan 1.3)

So, we query for Bc7Srgb, Etc2R8G8B8A8Srgb, Astc4x4Srgb formats. If Vulkan 1.3 is supported, we query for Astc4x4Sfloat as well. In all the cases, we test for SampledImageFilterLinear bit:

---
\`\`\`
cout << "      Format support for compressed textures:" << endl;
vk::FormatProperties formatProperties = vk::getPhysicalDeviceFormatProperties(pd, vk::Format::eBc7SrgbBlock);
if(formatProperties.optimalTilingFeatures & vk::FormatFeatureFlagBits::eSampledImageFilterLinear)
\tcout << "         BC7  (BC7_SRGB):            yes" << endl;
else
\tcout << "         BC7  (BC7_SRGB):            no" << endl;
formatProperties = vk::getPhysicalDeviceFormatProperties(pd, vk::Format::eEtc2R8G8B8A8SrgbBlock);
if(formatProperties.optimalTilingFeatures & vk::FormatFeatureFlagBits::eSampledImageFilterLinear)
\tcout << "         ETC2 (ETC2_R8G8B8A8_SRGB):  yes" << endl;
else
\tcout << "         ETC2 (ETC2_R8G8B8A8_SRGB):  no" << endl;
formatProperties = vk::getPhysicalDeviceFormatProperties(pd, vk::Format::eAstc4x4SrgbBlock);
if(formatProperties.optimalTilingFeatures & vk::FormatFeatureFlagBits::eSampledImageFilterLinear)
\tcout << "         ASTC (ASTC_4x4_SRGB):       yes" << endl;
else
\tcout << "         ASTC (ASTC_4x4_SRGB):       no" << endl;
if(properties.apiVersion >= vk::ApiVersion13) {
\tformatProperties = vk::getPhysicalDeviceFormatProperties(pd, vk::Format::eAstc4x4SfloatBlock);
\tif(formatProperties.optimalTilingFeatures & vk::FormatFeatureFlagBits::eSampledImageFilterLinear)
\t\tcout << "         ASTC (ASTC_4x4_SFLOAT):     yes" << endl;
\telse
\t\tcout << "         ASTC (ASTC_4x4_SFLOAT):     no" << endl;
} else
\tcout << "         ASTC (ASTC_4x4_SFLOAT):     no" << endl;
\`\`\`
            `, relatedContent: [
                {
                    label: "Previous part of the tutorial",
                    links: [
                        {
                            label: "1-3 - Development Tools",
                            link: `/${VULKAN_DOSSIER_PATHNAME}/detail/deviceInfo`
                        }
                    ]
                },
                {
                    label: "Next part of the tutorial",
                    links: [
                        {
                            label: "1-5 - Logical Device",
                            link: `/${VULKAN_DOSSIER_PATHNAME}/detail/logicalDevice`
                        }
                    ]
                }
            ]
        }
    ]
}


const logicalDevice: ProjectPageType = {
    menuTitle: "1-5 - Logical Device",
    pageTitle: "1-5 - Logical Device",
    projectDescription: [
        {
            header: "1-5 - Logical Device",
            text: `
Logical device is needed for the real work in Vulkan, such as computations or graphics rendering. In the previous articles we covered Vulkan instance, physical devices, and the ways in which we can get their properties, features, list of extensions, etc. out of them. The next step is logical device.

A logical device can be created using the following code:

---
\`\`\`
// create device
vk::initDevice(
\tpd,  // physicalDevice
\tvk::DeviceCreateInfo{  // pCreateInfo
\t\t.flags = 0,
\t\t.queueCreateInfoCount = 1,  // at least one queue is mandatory
\t\t.pQueueCreateInfos = array<vk::DeviceQueueCreateInfo,1>{
\t\t\tvk::DeviceQueueCreateInfo{
\t\t\t\t.flags = 0,
\t\t\t\t.queueFamilyIndex = 0,
\t\t\t\t.queueCount = 1,
\t\t\t\t.pQueuePriorities = &(const float&)1.f,
\t\t\t}
\t\t}.data(),
\t\t.enabledLayerCount = 0,  // no enabled layers
\t\t.ppEnabledLayerNames = nullptr,
\t\t.enabledExtensionCount = 0,  // no enabled extensions
\t\t.ppEnabledExtensionNames = nullptr,
\t\t.pEnabledFeatures = nullptr,  // no enabled features
\t}
);
\`\`\`
---

As can be seen, a logical device is created out of physical device. Additionally, we provide the list of the required queues, list of enabled layers and extensions, and enabled features.

### Logical and physical devices

So, why we have logical and physical devices and not just devices? One reason is that we can combine several physical devices to create one logical device with increased performance. Another reason is resource optimizations. We first query for capabilites, and then create logical device exactly as we need it. Thus, logical device is not full blown device, but optimized for our needs. In other words, having logical and physical device separated, the driver and our application might be more efficient.

We can depict Vulkan architecture in the following way:

![](https://vulkan-fit.github.io/VulkanTutorial/1-5-LogicalDevice/architecture.svg)

Applications are doing their Vulkan calls. These are going through the Vulkan loader. The loader forwards them to the appropriate Vulkan drivers. The drivers control physical devices. One driver typically controls one physical device. If there are more physical devices from the same vendor, often they use the same driver. There are also drivers that are not directly connected with any physical device. One example is "CPU" drivers that are doing software rendering.

### Function pointers

When the call is going through Vulkan loader, it uses trampoline to direct the call to particular Vulkan driver. The overhead is usually negligible. Anyway, to avoid it or to gain additional flexibility, Vulkan provides vkGetDeviceProcAddr() function to query function pointer for particular logical device. Thus, we can directly call the drivers function as shown on the following image by yellow arrow:

![](https://vulkan-fit.github.io/VulkanTutorial/1-5-LogicalDevice/architecture-dynamic-calls.svg)

We can even print the name of library where particular Vulkan function is implemented. It is demonstrated in the code of this article:

---
\`\`\`
// device function pointers
cout << "Device function pointers for " << properties.deviceName << ":" << endl;
cout << "   vkCreateShaderModule() points to: " << getLibraryOfAddr(vk::getDeviceProcAddr("vkCreateShaderModule")) << endl;
cout << "   vkQueueSubmit()        points to: " << getLibraryOfAddr(vk::getDeviceProcAddr("vkQueueSubmit")) << endl;
\`\`\`
---

When run, the output similar to the following one should appear:

---
\`\`\`
Instance function pointers:
   vkCreateInstance()     points to: /usr/lib/x86_64-linux-gnu/libvulkan.so.1
   vkCreateShaderModule() points to: /usr/lib/x86_64-linux-gnu/libvulkan.so.1
   vkQueueSubmit()        points to: /usr/lib/x86_64-linux-gnu/libvulkan.so.1
Device function pointers:
   Quadro K1000M
      vkCreateShaderModule() points to: /usr/lib/x86_64-linux-gnu/libnvidia-glcore.so.460.73.01
      vkQueueSubmit()        points to: /usr/lib/x86_64-linux-gnu/libGLX_nvidia.so.0
\`\`\`
---

This was result from Linux and Nvidia Quadro K1000M. Windows 7 with three different cards is slightly different:

---
\`\`\`
Instance function pointers:
   vkCreateInstance()     points to: C:\\Windows\\system32\\vulkan-1.dll
   vkCreateShaderModule() points to: C:\\Windows\\system32\\vulkan-1.dll
   vkQueueSubmit()        points to: C:\\Windows\\system32\\vulkan-1.dll
Device function pointers:
   GeForce GTX 1050
      vkCreateShaderModule() points to: C:\\Windows\\system32\\nvoglv64.dll
      vkQueueSubmit()        points to: C:\\Windows\\system32\\nvoglv64.dll
   Radeon(TM) RX 460 Graphics
      vkCreateShaderModule() points to: C:\\Windows\\System32\\amdvlk64.dll
      vkQueueSubmit()        points to: C:\\Windows\\System32\\amdvlk64.dll
   Intel(R) HD Graphics 530
      vkCreateShaderModule() points to: C:\\Windows\\system32\\igvk64.dll
      vkQueueSubmit()        points to: C:\\Windows\\system32\\igvk64.dll
\`\`\`
---

So, Vulkan loader is implemented by libvulkan.so.1 on Linux and vulkan-1.dll on Windows. The names of the drivers can be seen in the rest of the output.
            `, relatedContent: [
                {
                    label: "Previous part of the tutorial",
                    links: [
                        {
                            label: "1-4 - Advanced Info",
                            link: `/${VULKAN_DOSSIER_PATHNAME}/detail/advancedInfo`
                        }
                    ]
                }
            ]
        }
    ]
}


export const DOSSIER: DossierType = {
    pathName: VULKAN_DOSSIER_PATHNAME,
    image: "https://vulkan-fit.github.io/VulkanTutorial/common/volcano.jpg",
    header: "Vulkan Tutorial",
    subheader: "Learn Vulkan with this Simple Tutorial",
    tags: ["Vulkan", "Rendering"],
    link: `/ngi0/${VULKAN_DOSSIER_PATHNAME}`,
    cards: VULKAN_CARDS,
    tagsDossierDetail: VULKAN_TAGS,
    projects: VULKAN_PROJECTS,
    detailedProjects: {
        deviceList,
        developmentTools,
        deviceInfo,
        advancedInfo,
        logicalDevice
    },
    comparisons: {}
};
