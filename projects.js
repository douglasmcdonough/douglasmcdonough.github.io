/*
  PROJECT CONTENT — edit this file to update text, pictures and video paths.

  New video files to add yourself:
    assets/videos/3_arm.surgeon.mp4
    assets/videos/zoom-in-3arm.mp4
    assets/videos/physical_ur5.mp4

  Missing MP4s are automatically hidden until those files are added.
  See VIDEO_AND_PORTFOLIO_GUIDE.md for exact conversion commands.
*/
const PORTFOLIO_PROJECTS = {
  hardware: [
    {
      id: "robot-tool-hardware", number: "01",
      title: "da Vinci Xi Tool Adapter & Motor Pack",
      eyebrow: "Surgical robotics / mechanism design",
      description: "Designed and prototyped a compact, motorized adapter that enables a UR robot to actuate da Vinci X/Xi surgical instruments. The redesign targets more reliable instrument engagement, secure tool retention, and a smaller five-motor package for a laparoscopic robotics platform.",
      image: "davinci_adapter.jpg", imageAlt: "CAD rendering of the da Vinci surgical instrument adapter",
      tags: ["SolidWorks", "UR5", "Dynamixel", "Robotic tooling"],
      highlights: [
        "Reworked the drive train around five smaller Dynamixel XC330-M288-T motors and a compact timing-belt system.",
        "Designed D-profile shafts and 3 mm-stroke spring plungers for easier instrument engagement.",
        "Added snap clips and star knobs to help retain the instrument and stabilize its positioning.",
        "Integrated the physical adapter with ROS 2-based homing and coupled instrument teleoperation."
      ],
      documents: [
        { label: "Mechanical design presentation (PDF)", file: "presentation.pdf" },
        { label: "Outer shaft engineering drawing (PDF)", file: "Outer_shaft_Drawing_metric.pdf" },
        { label: "Inner shaft engineering drawing (PDF)", file: "Inner_shaft_Drawing_metric.pdf" }
      ]
    },
    {
      id: "three-arm-hardware", number: "02",
      title: "Three-Arm Laparoscopic Robotic System",
      eyebrow: "Surgical robotics / systems integration",
      description: "Contributed to a three-arm laparoscopic research testbed for teleoperated surgical demonstrations: two UR robot arms manipulate surgical instruments while a third carries a dual-channel laparoscope. The platform integrates custom instrument adapters, a camera system, and phantom-based surgical workflows.",
      image: "assets/images/3arm.png", imageAlt: "Photograph of the three-arm laparoscopic robotic research system",
      tags: ["UR robots", "Laparoscopy", "System integration", "Teleoperation"],
      highlights: [
        "Three-arm layout with two instrument manipulators and one laparoscope-mounted camera arm.",
        "Developed UR-to-da Vinci instrument-adapter components as part of the larger team effort.",
        "Supported a testbed for teleoperated laparoscopic manipulation and surgical phantom demonstrations."
      ],
      videos: [
        { label: "Three-arm system — surgeon demonstration", file: "assets/videos/3_arm.surgeon.mp4" },
        { label: "Three-arm system — close-up", file: "assets/videos/zoom-in-3arm.mp4" }
      ]
    },
    {
      id: "continuum-probe", number: "03",
      title: "Tendon-Driven Continuum Surgical Probe",
      eyebrow: "Research / robotic mechanisms",
      description: "Designed and built a tendon-driven continuum instrument for minimally invasive surgery research in the Advanced Robot Manipulators Lab at Stevens Institute of Technology. The flexible probe bends through cable actuation and was developed for integration with a seven-degree-of-freedom robot arm.",
      image: "assets/images/continuum.png", imageAlt: "Simulation illustration of a flexible continuum probe bending around an arc",
      tags: ["SolidWorks", "Continuum robotics", "3D printing", "ROS 2"],
      highlights: [
        "Designed a segmented continuum tip with 12 disks and four symmetrically routed titanium actuation wires.",
        "Modeled and fabricated the servo-driven spooling mechanism and instrument module in SolidWorks.",
        "Assembled the module on a 7-DOF robot and developed URDF representations for ROS-based visualization.",
        "Used microcontroller-driven motor tests to examine wire actuation and probe bending behavior."
      ],
      gallery: [
        { file: "assets/images/continuum_exploded.png", label: "Exploded mechanism and instrument module" },
        { file: "assets/images/robot_continuum.png", label: "Instrument architecture and robot integration" },
        { file: "assets/images/vectors_continuum.png", label: "Probe geometry and actuator vectors" }
      ],
      documents: [
        { label: "Selected research experience (PDF)", file: "assets/pdfs/continuum_research_experience.pdf" }
      ]
    },
    {
      id: "lithography", number: "04",
      title: "Lithography Pattern Design",
      eyebrow: "Microfabrication / pattern layout",
      description: "Created a collection of geometric layouts for a lithography-related design exercise, exploring fine feature arrangements across triangular, circular, and square patterns. The drawings document the pattern-design stage rather than a claimed fabrication result.",
      image: "assets/images/lithography_triangle.png", imageAlt: "Triangular lithography pattern layout",
      tags: ["Lithography", "Pattern design", "Microfabrication"],
      highlights: [
        "Developed and compared triangular, circular, and square layout variants.",
        "Organized the individual patterns into a larger combined design layout."
      ],
      gallery: [
        { file: "assets/images/lithography_circle.png", label: "Circular pattern variation" },
        { file: "assets/images/lithography_square.png", label: "Square pattern variation" },
        { file: "assets/images/lithography_big.png", label: "Combined pattern layout" }
      ]
    },
    {
      id: "leg-holder", number: "05",
      title: "Leg Positioning Fixture",
      eyebrow: "Mechanical design / prototyping",
      description: "Designed and assembled a leg-support fixture, translating a SolidWorks mechanism into a physical prototype. The project connects CAD layout, component arrangement, and hands-on assembly for a constrained positioning setup.",
      image: "assets/images/leg_holder_physical.png", imageAlt: "Physical prototype of the leg positioning fixture",
      tags: ["SolidWorks", "Mechanical design", "Prototyping"],
      highlights: [
        "Developed the fixture geometry and support layout in SolidWorks.",
        "Built and documented a physical version of the assembly."
      ],
      gallery: [
        { file: "assets/images/leg_holder_solidworks.png", label: "SolidWorks assembly model" }
      ]
    }
  ],
  software: [
    {
      id: "ur5-visual-servoing", number: "01",
      title: "UR5 Visual Servoing: Simulation & Hardware",
      eyebrow: "Computer vision / feedback control",
      description: "Demonstrated vision-guided UR5 robot motion in simulation, connecting visual feedback to manipulator movement. A side-by-side hardware demonstration will accompany the Gazebo/RViz recording so the simulated and physical systems can be compared directly.",
      image: "assets/images/visual_cover.png", imageAlt: "UR5 visual-servoing simulation shown in Gazebo and RViz",
      tags: ["UR5", "Visual servoing", "Gazebo", "RViz"],
      highlights: [
        "Visualized robot motion and feedback behavior in Gazebo and RViz.",
        "Paired the simulation slot with a corresponding physical UR5 demonstration for comparison."
      ],
      videos: [
        { label: "Gazebo / RViz simulation", file: "assets/videos/Visual_servoing_gazebo.webm" },
        { label: "Physical UR5 demonstration", file: "assets/videos/physical_ur5.mp4" }
      ]
    },
    {
      id: "robot-tool-software", number: "02",
      title: "ROS 2 Control for da Vinci Instruments",
      eyebrow: "ROS 2 / motor control / teleoperation",
      description: "Implemented control functionality for the motorized da Vinci instrument adapter, combining motor initialization, current-based limit detection, and joystick-driven teleoperation. Custom coupling matrices translate tool-level commands into coordinated Dynamixel motor movements.",
      image: "davinci_adapter.jpg", imageAlt: "CAD rendering of motorized da Vinci surgical instrument adapter",
      tags: ["ROS 2", "Dynamixel", "Teleoperation", "Motor control"],
      highlights: [
        "Implemented current-sensing motor homing to find instrument travel limits.",
        "Developed motor-coupling logic for instrument actuation from teleoperation inputs.",
        "Connected physical prototype actuation to the broader surgical robot system."
      ],
      documents: [ { label: "Design and control presentation (PDF)", file: "presentation.pdf" } ]
    },
    {
      id: "three-arm-software", number: "03",
      title: "Three-Arm Robot Teleoperation",
      eyebrow: "Multi-robot systems / teleoperation",
      description: "Worked within the software and hardware integration effort for a three-arm laparoscopic robotics platform. Two UR manipulators operate surgical tools while the third arm positions the camera, allowing teleoperated tasks to be studied using a shared visual workspace.",
      image: "assets/images/3arm.png", imageAlt: "Three-arm laparoscopic robotic system configured for teleoperation",
      tags: ["ROS 2", "UR robots", "Teleoperation", "Robot integration"],
      highlights: [
        "Contributed instrument actuation and control components used in the multi-arm system.",
        "Worked alongside a larger team integrating surgical tooling, robot control, and visualization."
      ],
      videos: [
        { label: "Three-arm system — surgeon demonstration", file: "assets/videos/3_arm.surgeon.mp4" },
        { label: "Three-arm system — close-up", file: "assets/videos/zoom-in-3arm.mp4" }
      ]
    },
    {
      id: "needle-insertion", number: "04",
      title: "ROS 2 Galil Needle Insertion Robot",
      eyebrow: "Robot programming / hardware interfaces",
      description: "Collaborated on a ROS 2-based control and simulation stack for a Galil-driven needle-insertion robot. The project combines hardware interfaces, position and velocity command paths, a Gazebo simulation, and documented procedures for launching and testing the controller system.",
      image: "assets/images/needleinsertion.jpeg", imageAlt: "Experimental Galil-controlled needle insertion robot hardware",
      tags: ["ROS 2", "Galil", "ros2_control", "Gazebo"],
      highlights: [
        "Implemented a project workflow supporting position and velocity control of the robot axes.",
        "Connected the Galil hardware-interface command paths to ROS 2 controllers.",
        "Maintained a simulation workflow using Gazebo with compatible controller topics."
      ],
      youtube: { id: "_8_UGs2Rqhs", label: "Needle insertion robot demonstration" },
      links: [
        { label: "Project documentation (Read the Docs)", url: "https://galil-needle-insertion.readthedocs.io/en/latest/index.html" },
        { label: "Watch demonstration on YouTube", url: "https://www.youtube.com/watch?v=_8_UGs2Rqhs" }
      ]
    },
    {
      id: "balancing-simulation", number: "05",
      title: "Two-Wheeled Balancing Robot Simulation",
      eyebrow: "Robotics coursework / simulation",
      description: "Simulated a two-wheeled balancing robot in a virtual environment, visualizing its body orientation and motion over time. The recording documents a robotics coursework exercise in balancing dynamics and system behavior.",
      image: "assets/images/balancing_cover.png", imageAlt: "Two-wheeled balancing robot in a 3D simulation",
      tags: ["Robot simulation", "Dynamics", "Balancing"],
      highlights: ["Recorded the simulated system to visualize its motion and behavior."],
      videos: [ { label: "Balancing system simulation", file: "assets/videos/balancing.webm" } ]
    }
  ]
};
