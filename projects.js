/*
  PROJECTS.JS - THE ONLY FILE YOU NEED TO EDIT FOR PROJECT CONTENT

  Change title, description, tags, and highlights between the quotes.
  Photos/videos are shared between Hardware and Software when they describe
  the same project. One file is enough for both cards.

  To add media: copy a JPG or MP4 into the exact 'image' or 'video' path.
  Missing media does not create a broken image/video on the public website.
  See TODAY_60_MIN_CHECKLIST.md for a short to-do list.

  Please confirm all descriptions and any public research media before posting.
*/

const PORTFOLIO_PROJECTS = {
  hardware: [
    {
      id: "robot-tool-hardware",
      number: "01",
      title: "Robot Tool Adapter & Motor Pack",
      eyebrow: "Mechatronics / robotic tooling",
      description: "Designed a modular motorized adapter to interface da Vinci Xi instruments with a UR5 robot, combining mechanical coupling, actuation, and software control for a robotics research platform.",
      image: "assets/images/robot-tool-adapter.jpg",
      // The original CAD image is already included; no new file is required.
      fallbackImage: "davinci_adapter.jpg",
      video: "assets/videos/robot-tool-adapter-demo.mp4",
      imageAlt: "CAD model of a motorized robot tool adapter with coupled shafts and instrument interface",
      tags: ["SolidWorks", "UR5", "Dynamixel", "Mechatronics"],
      highlights: [
        "Actuation: Integrated Dynamixel XC330-M288-T motors for current-based position control and homing.",
        "Tool engagement: Used 3 mm-stroke spring plungers and D-profile shafts to enable tool attachment.",
        "Retention: Added snap clips and star knobs to secure instrument positioning during teleoperation.",
        "Hardware-software integration: Connected the adapter to ROS 2 control and custom coupling matrices."
      ],
      documents: [
        { label: "Outer shaft drawing", file: "Outer_shaft_Drawing_metric.pdf" },
        { label: "Inner shaft drawing", file: "Inner_shaft_Drawing_metric.pdf" },
        { label: "Project presentation", file: "presentation.pdf" }
      ]
    },
    {
      id: "three-arm-hardware",
      number: "02",
      title: "Three-Arm Robotic System",
      eyebrow: "Multi-arm robotics / integration",
      description: "A three-arm robot platform for laparoscopic manipulation, viewed through the lens of mechanical architecture and robotic system integration.",
      image: "assets/images/three-arm-robot.jpg",
      video: "assets/videos/three-arm-robot-demo.mp4",
      imageAlt: "Three-arm robotic system for laparoscopic manipulation",
      tags: ["Multi-arm robotics", "System integration"],
      // Replace with your exact role, integration approach, and one result.
      highlights: [],
      documents: [
        { label: "Project documentation", file: "assets/pdfs/hardware-three-arm-laparoscopic.pdf" }
      ]
    },
    {
      id: "continuum-probe",
      number: "03",
      title: "Continuum Robot End Effector",
      eyebrow: "Robot mechanisms / end effectors",
      description: "A continuum-probe end effector exploring compact mechanical design and flexible motion for robotic manipulation.",
      image: "assets/images/continuum-end-effector.jpg",
      video: "assets/videos/continuum-end-effector-demo.mp4",
      imageAlt: "Continuum-probe robotic end-effector prototype",
      tags: ["Mechanism design", "End effectors", "Prototyping"],
      // Replace with your mechanism type, fabrication approach, and tests.
      highlights: [],
      documents: [
        { label: "Project documentation", file: "assets/pdfs/hardware-continuum-probe.pdf" }
      ]
    },
    {
      id: "lithography",
      number: "04",
      title: "Microfabrication & Lithography",
      eyebrow: "Precision fabrication / prototyping",
      description: "Hands-on lithography work focused on small-scale fabrication processes and precision engineering.",
      image: "assets/images/lithography.jpg",
      video: "assets/videos/lithography-demo.mp4",
      imageAlt: "Lithography fabrication process or completed microfabricated features",
      tags: ["Lithography", "Microfabrication"],
      // Replace with the process, material, and a measurable outcome.
      highlights: [],
      documents: [
        { label: "Project documentation", file: "assets/pdfs/hardware-lithography.pdf" }
      ]
    }
  ],

  software: [
    {
      id: "ur5-visual-servoing",
      number: "01",
      title: "UR5 Vision-Guided Control",
      eyebrow: "Computer vision / feedback control",
      description: "A UR5 visual-servoing project linking camera feedback to robot motion, demonstrating the connection between perception and closed-loop control.",
      image: "assets/images/ur5-visual-servoing.jpg",
      video: "assets/videos/ur5-visual-servoing-demo.mp4",
      imageAlt: "UR5 robotic arm in a camera-guided visual servoing setup",
      tags: ["UR5", "Visual servoing", "Computer vision"],
      // Add your perception algorithm, control approach, and actual results.
      highlights: [],
      documents: [
        { label: "Project documentation", file: "assets/pdfs/software-ur5-visual-servoing.pdf" }
      ]
    },
    {
      id: "robot-tool-software",
      number: "02",
      title: "ROS 2 Robot Tool Control",
      eyebrow: "ROS 2 / motor control / teleoperation",
      description: "Built ROS 2 control functionality for a motorized robotic tool adapter, including current-based homing and joystick teleoperation using custom coupling matrices.",
      // One CAD image and one demo video also appear on the hardware card.
      image: "assets/images/robot-tool-adapter.jpg",
      fallbackImage: "davinci_adapter.jpg",
      video: "assets/videos/robot-tool-adapter-demo.mp4",
      imageAlt: "CAD model of robot tool adapter used in ROS 2 motor control experiments",
      tags: ["ROS 2", "Teleoperation", "Dynamixel", "Control"],
      highlights: [
        "Implemented current-based motor homing for the tool actuation system.",
        "Developed joystick teleoperation using custom joint-to-motor coupling matrices.",
        "Integrated Dynamixel motor commands with the physical robotic adapter."
      ],
      documents: [
        { label: "Project presentation", file: "presentation.pdf" },
        { label: "Software documentation", file: "assets/pdfs/software-da-vinci-xi-control.pdf" }
      ]
    },
    {
      id: "three-arm-software",
      number: "03",
      title: "Three-Arm Robot Software",
      eyebrow: "Multi-arm control / integration",
      description: "Software and coordinated operation for a three-arm laparoscopic robot system, emphasizing the challenges of bringing multiple robotic components together.",
      image: "assets/images/three-arm-robot.jpg",
      video: "assets/videos/three-arm-robot-demo.mp4",
      imageAlt: "Three-arm robotic system and its software control setup",
      tags: ["Robotics software", "System integration"],
      // Replace with the actual architecture, control stack, and your role.
      highlights: [],
      documents: [
        { label: "Software documentation", file: "assets/pdfs/software-three-arm-laparoscopic.pdf" }
      ]
    }
  ]
};
