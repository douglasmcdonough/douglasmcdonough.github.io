/*
===============================================================
  EASY EDITING FILE - projects.js
===============================================================
  Edit project titles, descriptions, highlights, and tags HERE.
  You don't need to change index.html or app.js to edit a project.

  PHOTO: Save an image at the exact path listed in "image".
         It appears automatically. JPG / PNG / WebP supported;
         if using PNG, update .jpg below to .png.
  VIDEO: Save an MP4 at the exact path listed in "video".
         It appears automatically in the project details.
  PDF:   Save the file at the path listed under "documents".
         It appears automatically on the published website.

  To change a description, only change the words between quotes.
  If your text includes an apostrophe, it's fine in these double quotes.
  For a new highlight, add another quoted line within the [ ] list.

  Feel free to leave projects short for now. There is no rush.
===============================================================
*/

const PORTFOLIO_PROJECTS = {
  hardware: [
    {
      id: "da-vinci-hardware",
      number: "01",
      title: "da Vinci Xi Tool Adapter & Motor Pack",
      eyebrow: "Robotic tooling / mechanical design",
      description: "Redesigned a modular tool adapter for an ARPA-H-funded partial nephrectomy project, integrating da Vinci Xi surgical instruments with a Universal Robots UR5 arm.",
      image: "assets/images/hardware-da-vinci-xi-adapter.jpg",
      // If your original davinci_adapter.jpg is still in the repository root,
      // it will be used until you add the new photo above.
      fallbackImage: "davinci_adapter.jpg",
      video: "assets/videos/hardware-da-vinci-xi-adapter.mp4",
      imageAlt: "da Vinci Xi tool adapter and motor pack",
      tags: ["SolidWorks", "UR5", "Dynamixel"],
      highlights: [
        "Actuation: Incorporated Dynamixel XC330-M288-T motors for current-based position control and automatic homing.",
        "Tool engagement: Used 3 mm-stroke spring plungers and D-profile shaft cuts for secure, fast instrument attachment.",
        "Retention: Added snap clips and star knobs to maintain precise surgical tool-tip positioning during teleoperation.",
        "ROS 2 integration: Developed current-based homing and joystick teleoperation with custom coupling matrices."
      ],
      documents: [
        { label: "Outer shaft drawing (metric)", file: "Outer_shaft_Drawing_metric.pdf" },
        { label: "Inner shaft drawing (metric)", file: "Inner_shaft_Drawing_metric.pdf" },
        { label: "Project presentation", file: "presentation.pdf" }
      ]
    },
    {
      id: "three-arm-hardware",
      number: "02",
      title: "Three-Arm Laparoscopic System",
      eyebrow: "Minimally invasive robotics",
      description: "A three-arm laparoscopic minimally invasive robotics system, with a hardware focus on physical architecture and integration.",
      image: "assets/images/hardware-three-arm-laparoscopic.jpg",
      video: "assets/videos/hardware-three-arm-laparoscopic.mp4",
      imageAlt: "Three-arm laparoscopic minimally invasive robotic system",
      tags: ["Robotics", "System integration"],
      // You can add your engineering achievements in highlights later.
      highlights: [],
      documents: [
        { label: "Project documentation", file: "assets/pdfs/hardware-three-arm-laparoscopic.pdf" }
      ]
    },
    {
      id: "continuum-probe",
      number: "03",
      title: "Continuum Probe End Effector",
      eyebrow: "Mechanisms / end-effector design",
      description: "A continuum-probe end effector for robotic applications, centered on mechanism design and compact, flexible tooling.",
      image: "assets/images/hardware-continuum-probe.jpg",
      video: "assets/videos/hardware-continuum-probe.mp4",
      imageAlt: "Continuum probe end-effector prototype",
      tags: ["Mechanism design", "Prototyping"],
      // Add mechanism, fabrication, and validation details when ready.
      highlights: [],
      documents: [
        { label: "Project documentation", file: "assets/pdfs/hardware-continuum-probe.pdf" }
      ]
    },
    {
      id: "lithography",
      number: "04",
      title: "Lithography",
      eyebrow: "Fabrication / microengineering",
      description: "A lithography-focused fabrication project exploring processes and structures at small scales.",
      image: "assets/images/hardware-lithography.jpg",
      video: "assets/videos/hardware-lithography.mp4",
      imageAlt: "Lithography process and fabricated features",
      tags: ["Lithography", "Fabrication"],
      // Add fabrication methods, materials, and outcomes when ready.
      highlights: [],
      documents: [
        { label: "Project documentation", file: "assets/pdfs/hardware-lithography.pdf" }
      ]
    }
  ],

  software: [
    {
      id: "da-vinci-software",
      number: "01",
      title: "da Vinci Xi Tool Adapter Control",
      eyebrow: "ROS 2 / robotic control",
      description: "Developed ROS 2 control functionality for the da Vinci Xi tool adapter, including current-based homing and joystick teleoperation using custom coupling matrices.",
      image: "assets/images/software-da-vinci-xi-control.jpg",
      video: "assets/videos/software-da-vinci-xi-control.mp4",
      imageAlt: "Software control and testing for the da Vinci Xi tool adapter",
      tags: ["ROS 2", "Teleoperation", "Dynamixel"],
      highlights: [
        "Built current-based homing functionality for the instrument actuation system.",
        "Implemented joystick teleoperation with custom coupling matrices.",
        "Integrated control of Dynamixel XC330-M288-T motors with the physical tool adapter."
      ],
      documents: [
        { label: "Project presentation", file: "presentation.pdf" },
        { label: "Software documentation", file: "assets/pdfs/software-da-vinci-xi-control.pdf" }
      ]
    },
    {
      id: "three-arm-software",
      number: "02",
      title: "Three-Arm Laparoscopic System",
      eyebrow: "Robotics software / integration",
      description: "Software for a three-arm laparoscopic minimally invasive robotics system, focused on coordinated robotic operation and system integration.",
      image: "assets/images/software-three-arm-laparoscopic.jpg",
      video: "assets/videos/software-three-arm-laparoscopic.mp4",
      imageAlt: "Software and control setup for the three-arm laparoscopic system",
      tags: ["Robotic systems", "Software integration"],
      // Add the software stack, your contributions, and results when ready.
      highlights: [],
      documents: [
        { label: "Software documentation", file: "assets/pdfs/software-three-arm-laparoscopic.pdf" }
      ]
    },
    {
      id: "ur5-visual-servoing",
      number: "03",
      title: "UR5 Visual Servoing",
      eyebrow: "Vision-guided robotic control",
      description: "Visual servoing with a UR5 robotic arm, connecting camera-based feedback with robot motion control.",
      image: "assets/images/software-ur5-visual-servoing.jpg",
      video: "assets/videos/software-ur5-visual-servoing.mp4",
      imageAlt: "UR5 robotic arm visual servoing experiment",
      tags: ["UR5", "Computer vision", "Control"],
      // Add the vision method, control loop, and accuracy results when ready.
      highlights: [],
      documents: [
        { label: "Software documentation", file: "assets/pdfs/software-ur5-visual-servoing.pdf" }
      ]
    }
  ]
};
