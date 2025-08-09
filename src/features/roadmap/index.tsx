import { Dot } from 'lucide-react';
import { RoadmapBlock } from './ui/roadmap-block';
import {
  RoadmapBlocksCanvas,
  RoadmapInfo,
  RoadmapLayout,
} from './ui/roadmap-layout';
import { Tag } from '@/shared/ui/tag';
import { RoadmapTags } from './ui/roadmap-tags';
import { useDraggleArea } from './hooks/use-draggle-area';
import { useGetRoadmapById } from './hooks/use-get-roadmap-by-id';
import { href, Link } from 'react-router-dom';
import { ROUTES } from '@/shared/constans/routes';
import { RoadmapActions } from './ui/roadmap-actions';

// const jsRoadmap: RoadmapType = {
//   id: 'cpp-developer-roadmap-2024',
//   title: 'C++ Developer Roadmap 🚀',
//   description:
//     'A complete guide to becoming a proficient C++ Developer in 2024 and beyond. From fundamentals to advanced topics. 💻',
//   tags: ['c++', 'programming', 'backend', 'gamedev', 'systems'],
//   createdAt: '2024-08-01T10:00:00Z',
//   updatedAt: '2024-08-01T10:00:00Z',
//   totalStages: 4,
//   totalBlocks: 12,
//   totalItems: 49,
//   stages: [
//     {
//       id: 'stage-1',
//       title: 'Stage 1: C++ Fundamentals  기초',
//       description:
//         'Mastering the core concepts of the C++ language. This is your foundation. 🧱',
//       status: 'todo',
//       blocks: [
//         {
//           id: 'block-1',
//           title: 'Core Concepts & Syntax 📝',
//           description:
//             'Understanding the basic building blocks of any C++ program.',
//           status: 'todo',
//           items: [
//             {
//               id: 'item-1',
//               title: 'Compiler & First Program ▶️',
//               description:
//                 "Set up your development environment (GCC/Clang/MSVC) and write 'Hello, World!'.",
//               status: 'todo',
//               resources: [
//                 {
//                   title: 'Compiling C++ with GCC',
//                   url: 'https://www.learncpp.com/cpp-tutorial/installing-an-integrated-development-environment-ide/',
//                 },
//               ],
//               difficulty: 'beginner',
//             },
//             {
//               id: 'item-2',
//               title: 'Variables & Data Types 🔢',
//               description:
//                 'Learn about int, double, char, bool, and other fundamental types.',
//               status: 'todo',
//               resources: [
//                 {
//                   title: 'Fundamental data types',
//                   url: 'https://en.cppreference.com/w/cpp/language/types',
//                 },
//               ],
//               difficulty: 'beginner',
//             },
//             {
//               id: 'item-3',
//               title: 'Operators 🧮',
//               description:
//                 'Arithmetic, relational, logical, and bitwise operators.',
//               status: 'todo',
//               resources: [
//                 {
//                   title: 'C++ Operators',
//                   url: 'https://www.w3schools.com/cpp/cpp_operators.asp',
//                 },
//               ],
//               difficulty: 'beginner',
//             },
//             {
//               id: 'item-4',
//               title: 'Input/Output Streams 📥',
//               description:
//                 'Reading from `std::cin` and writing to `std::cout`.',
//               status: 'todo',
//               resources: [
//                 {
//                   title: 'Basic input/output',
//                   url: 'https://www.cplusplus.com/doc/tutorial/basic_io/',
//                 },
//               ],
//               difficulty: 'beginner',
//             },
//           ],
//         },
//         {
//           id: 'block-2',
//           title: 'Control Flow & Functions ⚙️',
//           description:
//             'Controlling the execution flow and organizing code into reusable blocks.',
//           status: 'todo',
//           items: [
//             {
//               id: 'item-5',
//               title: 'Conditional Statements (if, else, switch) 🤔',
//               description: 'Making decisions in your code.',
//               status: 'todo',
//               difficulty: 'beginner',
//             },
//             {
//               id: 'item-6',
//               title: 'Loops (for, while, do-while) 🔄',
//               description: 'Executing code blocks repeatedly.',
//               status: 'todo',
//               resources: [
//                 {
//                   title: 'C++ For Loop',
//                   url: 'https://www.geeksforgeeks.org/cpp-loops/',
//                 },
//               ],
//               difficulty: 'beginner',
//             },
//             {
//               id: 'item-7',
//               title: 'Functions 🛠️',
//               description:
//                 'Declaration, definition, parameters, and return values.',
//               status: 'todo',
//               resources: [
//                 {
//                   title: 'Functions',
//                   url: 'https://www.learncpp.com/cpp-tutorial/introduction-to-functions/',
//                 },
//               ],
//               difficulty: 'beginner',
//             },
//           ],
//         },
//         {
//           id: 'block-3',
//           title: 'Basic Data Structures 📚',
//           description: 'Storing collections of data.',
//           status: 'todo',
//           items: [
//             {
//               id: 'item-8',
//               title: 'Arrays ⛓️',
//               description:
//                 'Fixed-size collections of elements of the same type.',
//               status: 'todo',
//               difficulty: 'beginner',
//             },
//             {
//               id: 'item-9',
//               title: 'Strings (std::string) ✍️',
//               description: 'Working with text data.',
//               status: 'todo',
//               resources: [
//                 {
//                   title: 'std::string',
//                   url: 'https://en.cppreference.com/w/cpp/string/basic_string',
//                 },
//               ],
//               difficulty: 'beginner',
//             },
//             {
//               id: 'item-10',
//               title: 'Structs 📦',
//               description:
//                 'Creating your own simple data types by grouping variables.',
//               status: 'todo',
//               difficulty: 'beginner',
//             },
//             {
//               id: 'item-11',
//               title: 'Vectors (std::vector) 📦',
//               description:
//                 'Introduction to dynamic arrays from the Standard Library.',
//               status: 'todo',
//               resources: [
//                 {
//                   title: 'std::vector',
//                   url: 'https://www.cplusplus.com/reference/vector/vector/',
//                 },
//               ],
//               difficulty: 'beginner',
//             },
//           ],
//         },
//       ],
//     },
//     {
//       id: 'stage-2',
//       title: 'Stage 2: Intermediate C++ 🧠',
//       description:
//         'Diving deeper into C++ capabilities, memory management, and object-oriented programming.',
//       status: 'todo',
//       blocks: [
//         {
//           id: 'block-4',
//           title: 'Object-Oriented Programming (OOP) 🏛️',
//           description: 'Structuring programs using classes and objects.',
//           status: 'todo',
//           items: [
//             {
//               id: 'item-12',
//               title: 'Classes & Objects 👨‍🏫',
//               description:
//                 'The foundation of OOP: creating blueprints for objects.',
//               status: 'todo',
//               resources: [
//                 {
//                   title: 'Classes and objects in C++',
//                   url: 'https://www.geeksforgeeks.org/c-classes-and-objects/',
//                 },
//               ],
//               difficulty: 'intermediate',
//             },
//             {
//               id: 'item-13',
//               title: 'Constructors & Destructors 🏗️',
//               description: 'Special methods for object creation and cleanup.',
//               status: 'todo',
//               difficulty: 'intermediate',
//             },
//             {
//               id: 'item-14',
//               title: 'Encapsulation, Inheritance & Polymorphism 🧬',
//               description: 'The three pillars of OOP.',
//               status: 'todo',
//               resources: [
//                 {
//                   title: 'OOP Concepts',
//                   url: 'https://www.learncpp.com/cpp-tutorial/introduction-to-object-oriented-programming/',
//                 },
//               ],
//               difficulty: 'intermediate',
//             },
//             {
//               id: 'item-15',
//               title: 'Virtual Functions & Abstract Classes 👻',
//               description: 'Enabling runtime polymorphism.',
//               status: 'todo',
//               difficulty: 'intermediate',
//             },
//           ],
//         },
//         {
//           id: 'block-5',
//           title: 'Memory Management 🧠',
//           description: 'Understanding how C++ handles memory.',
//           status: 'todo',
//           items: [
//             {
//               id: 'item-16',
//               title: 'Stack vs. Heap Memory 📚',
//               description: 'Learn the difference and when to use each.',
//               status: 'todo',
//               difficulty: 'intermediate',
//             },
//             {
//               id: 'item-17',
//               title: 'Pointers & References 👉',
//               description: 'Direct memory manipulation and aliasing.',
//               status: 'todo',
//               resources: [
//                 {
//                   title: 'Pointers in C++',
//                   url: 'https://www.cplusplus.com/doc/tutorial/pointers/',
//                 },
//               ],
//               difficulty: 'intermediate',
//             },
//             {
//               id: 'item-18',
//               title: 'Smart Pointers (unique_ptr, shared_ptr) 💡',
//               description:
//                 'Modern C++ approach to automatic memory management (RAII).',
//               status: 'todo',
//               resources: [
//                 {
//                   title: 'std::unique_ptr',
//                   url: 'https://en.cppreference.com/w/cpp/memory/unique_ptr',
//                 },
//                 {
//                   title: 'std::shared_ptr',
//                   url: 'https://en.cppreference.com/w/cpp/memory/shared_ptr',
//                 },
//               ],
//               difficulty: 'intermediate',
//             },
//           ],
//         },
//         {
//           id: 'block-6',
//           title: 'Standard Template Library (STL) 🧰',
//           description: "Leveraging the power of C++'s standard library.",
//           status: 'todo',
//           items: [
//             {
//               id: 'item-19',
//               title: 'STL Containers 📦',
//               description:
//                 'Deeper dive into `vector`, `list`, `map`, `set`, `unordered_map`.',
//               status: 'todo',
//               resources: [
//                 {
//                   title: 'STL Containers',
//                   url: 'https://www.cplusplus.com/reference/stl/',
//                 },
//               ],
//               difficulty: 'intermediate',
//             },
//             {
//               id: 'item-20',
//               title: 'Iterators 🚶‍♂️',
//               description: 'The mechanism for traversing containers.',
//               status: 'todo',
//               difficulty: 'intermediate',
//             },
//             {
//               id: 'item-21',
//               title: 'STL Algorithms ⚙️',
//               description:
//                 'Using generic algorithms like `sort`, `find`, `copy`.',
//               status: 'todo',
//               resources: [
//                 {
//                   title: 'C++ Standard Library Algorithms',
//                   url: 'https://en.cppreference.com/w/cpp/algorithm',
//                 },
//               ],
//               difficulty: 'intermediate',
//             },
//             {
//               id: 'item-22',
//               title: 'Function Objects (Functors) & Lambdas 🐑',
//               description:
//                 'Objects that can be called like functions, and anonymous functions.',
//               status: 'todo',
//               difficulty: 'intermediate',
//             },
//           ],
//         },
//       ],
//     },
//     {
//       id: 'stage-3',
//       title: 'Stage 3: Advanced C++ & Tooling 🛠️',
//       description:
//         'Exploring modern features, professional tools, and complex topics.',
//       status: 'todo',
//       blocks: [
//         {
//           id: 'block-7',
//           title: 'Modern C++ Features (C++11 and beyond) ✨',
//           description:
//             'Writing cleaner, safer, and more efficient code with modern C++.',
//           status: 'todo',
//           items: [
//             {
//               id: 'item-23',
//               title: 'Move Semantics & Rvalue References &&',
//               description:
//                 'Optimizing object transfers and avoiding unnecessary copies.',
//               status: 'todo',
//               resources: [
//                 {
//                   title: 'Move Semantics',
//                   url: 'https://www.learncpp.com/cpp-tutorial/move-constructors-and-move-assignment/',
//                 },
//               ],
//               difficulty: 'advanced',
//             },
//             {
//               id: 'item-24',
//               title: 'Lambda Expressions Deep Dive 🐑',
//               description:
//                 'Advanced usage of lambda functions including captures.',
//               status: 'todo',
//               difficulty: 'advanced',
//             },
//             {
//               id: 'item-25',
//               title: 'Type Inference (auto) & Range-based for loops 🤖',
//               description: 'Writing more concise and readable code.',
//               status: 'todo',
//               difficulty: 'intermediate',
//             },
//             {
//               id: 'item-26',
//               title: 'Templates & Metaprogramming 🧩',
//               description: 'Writing code that generates code at compile-time.',
//               status: 'todo',
//               resources: [
//                 {
//                   title: 'Templates',
//                   url: 'https://www.cplusplus.com/doc/oldtutorial/templates/',
//                 },
//               ],
//               difficulty: 'advanced',
//             },
//             {
//               id: 'item-27',
//               title: 'C++20 Concepts & Modules 📦',
//               description:
//                 'Learn about constraints on template parameters and the new modular build system.',
//               status: 'todo',
//               difficulty: 'advanced',
//             },
//           ],
//         },
//         {
//           id: 'block-8',
//           title: 'Concurrency & Multithreading ⚡',
//           description: 'Writing programs that can do multiple things at once.',
//           status: 'todo',
//           items: [
//             {
//               id: 'item-28',
//               title: 'Threads (std::thread) 🧵',
//               description: 'Creating and managing threads of execution.',
//               status: 'todo',
//               resources: [
//                 {
//                   title: 'std::thread',
//                   url: 'https://en.cppreference.com/w/cpp/thread/thread',
//                 },
//               ],
//               difficulty: 'advanced',
//             },
//             {
//               id: 'item-29',
//               title: 'Mutexes & Locks (std::mutex) 🔒',
//               description: 'Protecting shared data from race conditions.',
//               status: 'todo',
//               difficulty: 'advanced',
//             },
//             {
//               id: 'item-30',
//               title: 'Condition Variables 🚦',
//               description: 'Synchronizing threads based on conditions.',
//               status: 'todo',
//               difficulty: 'advanced',
//             },
//             {
//               id: 'item-31',
//               title: 'Atomics & Memory Model ⚛️',
//               description:
//                 'Understanding low-level atomic operations for lock-free programming.',
//               status: 'todo',
//               resources: [
//                 {
//                   title: 'std::atomic',
//                   url: 'https://en.cppreference.com/w/cpp/atomic/atomic',
//                 },
//               ],
//               difficulty: 'advanced',
//             },
//           ],
//         },
//         {
//           id: 'block-9',
//           title: 'Build Systems & Tooling 🔧',
//           description:
//             'Professional tools for building, debugging, and testing C++ projects.',
//           status: 'todo',
//           items: [
//             {
//               id: 'item-32',
//               title: 'Build Systems: CMake 🔨',
//               description:
//                 'The industry standard for managing the build process of C++ projects.',
//               status: 'todo',
//               resources: [
//                 {
//                   title: 'CMake Tutorial',
//                   url: 'https://cmake.org/cmake/help/latest/guide/tutorial/index.html',
//                 },
//               ],
//               difficulty: 'intermediate',
//             },
//             {
//               id: 'item-33',
//               title: 'Debuggers: GDB / LLDB / Visual Studio Debugger 🐞',
//               description:
//                 'Finding and fixing bugs by inspecting program state.',
//               status: 'todo',
//               difficulty: 'intermediate',
//             },
//             {
//               id: 'item-34',
//               title: 'Package Managers: Conan / vcpkg 📦',
//               description: 'Managing external library dependencies.',
//               status: 'todo',
//               difficulty: 'intermediate',
//             },
//             {
//               id: 'item-35',
//               title: 'Static Analysis & Sanitizers 🛡️',
//               description:
//                 'Tools like Clang-Tidy, AddressSanitizer, and UndefinedBehaviorSanitizer to find bugs early.',
//               status: 'todo',
//               difficulty: 'advanced',
//             },
//           ],
//         },
//       ],
//     },
//     {
//       id: 'stage-4',
//       title: 'Stage 4: Specialization & Libraries 🎯',
//       description:
//         'Choose a path and learn the popular libraries and frameworks in that domain.',
//       status: 'todo',
//       blocks: [
//         {
//           id: 'block-10',
//           title: 'Networking 🌐',
//           description: 'Building applications that communicate over a network.',
//           status: 'todo',
//           items: [
//             {
//               id: 'item-36',
//               title: 'Socket Programming Basics 🔌',
//               description:
//                 'Understand the low-level concepts of network communication.',
//               status: 'todo',
//               difficulty: 'intermediate',
//             },
//             {
//               id: 'item-37',
//               title: 'Boost.Asio 🚀',
//               description:
//                 'A popular cross-platform C++ library for network and low-level I/O programming.',
//               status: 'todo',
//               resources: [
//                 {
//                   title: 'Boost.Asio Documentation',
//                   url: 'https://www.boost.org/doc/libs/release/doc/html/asio.html',
//                 },
//               ],
//               difficulty: 'advanced',
//             },
//             {
//               id: 'item-38',
//               title: 'gRPC 📞',
//               description:
//                 'A modern open source high performance RPC framework.',
//               status: 'todo',
//               resources: [
//                 {
//                   title: 'gRPC C++ Quickstart',
//                   url: 'https://grpc.io/docs/languages/cpp/quickstart/',
//                 },
//               ],
//               difficulty: 'advanced',
//             },
//             {
//               id: 'item-39',
//               title: 'HTTP/REST with libraries like CPR or Crow 🌐',
//               description: 'Building web clients or simple web servers in C++.',
//               status: 'todo',
//               difficulty: 'advanced',
//             },
//           ],
//         },
//         {
//           id: 'block-11',
//           title: 'Graphics & Game Development 🎮',
//           description: 'Creating visual applications, simulations, and games.',
//           status: 'todo',
//           items: [
//             {
//               id: 'item-40',
//               title: 'Graphics APIs: OpenGL or Vulkan 🖼️',
//               description: 'Low-level APIs for rendering 2D and 3D graphics.',
//               status: 'todo',
//               resources: [
//                 {
//                   title: 'Learn OpenGL',
//                   url: 'https://learnopengl.com/',
//                 },
//               ],
//               difficulty: 'advanced',
//             },
//             {
//               id: 'item-41',
//               title: 'Simple Libraries: SFML / SDL 🕹️',
//               description:
//                 'Great for learning and making 2D games, handling windows, input, and audio.',
//               status: 'todo',
//               difficulty: 'intermediate',
//             },
//             {
//               id: 'item-42',
//               title: 'Game Engines: Unreal Engine / Godot 🏰',
//               description:
//                 'Using industry-standard engines for complex game development (Unreal uses C++, Godot uses C++ for engine dev/GDNative).',
//               status: 'todo',
//               resources: [
//                 {
//                   title: 'Unreal Engine C++ Documentation',
//                   url: 'https://docs.unrealengine.com/5.3/en-US/programming-with-cplusplus-in-unreal-engine/',
//                 },
//               ],
//               difficulty: 'advanced',
//             },
//             {
//               id: 'item-43',
//               title: 'Linear Algebra for Graphics 📐',
//               description:
//                 'Understanding vectors, matrices, and transformations is crucial.',
//               status: 'todo',
//               difficulty: 'intermediate',
//             },
//           ],
//         },
//         {
//           id: 'block-12',
//           title: 'Performance & Optimization 🏎️',
//           description: 'Making your C++ programs run faster.',
//           status: 'todo',
//           items: [
//             {
//               id: 'item-44',
//               title: 'Profiling Tools ⏱️',
//               description:
//                 'Using tools like Valgrind (Callgrind), Perf, or Visual Studio Profiler to find bottlenecks.',
//               status: 'todo',
//               difficulty: 'advanced',
//             },
//             {
//               id: 'item-45',
//               title: 'Understanding Assembly (x86/ARM) ⚙️',
//               description:
//                 'Knowing what your code compiles down to can help with optimization.',
//               status: 'todo',
//               difficulty: 'advanced',
//             },
//             {
//               id: 'item-46',
//               title: 'Cache-Friendly Data Structures 💾',
//               description:
//                 'Designing data layouts that respect CPU caches for massive speedups.',
//               status: 'todo',
//               difficulty: 'advanced',
//             },
//             {
//               id: 'item-47',
//               title: 'Compiler Optimizations 🧠',
//               description:
//                 'Understanding what the compiler does for you and how to guide it with flags (-O2, -O3) and keywords.',
//               status: 'todo',
//               difficulty: 'intermediate',
//             },
//             {
//               id: 'item-48',
//               title: 'SIMD Intrinsics 🚀',
//               description:
//                 'Single Instruction, Multiple Data operations for massive parallel data processing.',
//               status: 'todo',
//               difficulty: 'advanced',
//             },
//             {
//               id: 'item-49',
//               title: 'Memory Alignment 📐',
//               description:
//                 'Aligning data in memory to improve access speed and enable certain instructions.',
//               status: 'todo',
//               difficulty: 'advanced',
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };

export const Roadmap = () => {
  const {
    canvasRef,
    transform,
    onMouseDown,
    isDragging,
    resetOffset,
    onScaleDown,
    onScaleUp,
  } = useDraggleArea();

  const { roadmap } = useGetRoadmapById();

  if (!roadmap) return null;

  return (
    <RoadmapLayout
      info={
        <RoadmapInfo
          title={roadmap.title}
          description={roadmap.description}
          tags={
            <RoadmapTags
              tags={roadmap.tags.map((tag) => (
                <Tag
                  value={tag}
                  onClick={(value) => console.log(value)}
                  key={tag}
                  title={tag}
                />
              ))}
            />
          }
        />
      }
      canvas={
        <RoadmapBlocksCanvas
          ref={canvasRef}
          onMouseDown={onMouseDown}
          className={`${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{
            transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
            willChange: 'transform',
          }}
          actions={
            <RoadmapActions
              onScaleDown={onScaleDown}
              onScaleUp={onScaleUp}
              resetOffset={resetOffset}
              scale={transform.scale}
            />
          }
          blocks={roadmap.stages.map((stage, key) => (
            <RoadmapBlock
              key={key}
              id={`${key}`}
              title={stage.title}
              description={stage.description}
              line={key !== roadmap.stages.length - 1}
              subBlocks={stage.blocks.map((block, key) => (
                <Link
                  to={href(ROUTES.ROADMAP_BLOCK, {
                    roadmapId: roadmap._id,
                    blockId: block.id,
                  })}
                  key={key}
                  className="flex items-center gap-2 text-white/70 underline hover:text-white  "
                >
                  <Dot />
                  {block.title}
                </Link>
              ))}
            />
          ))}
        />
      }
    />
  );
};
