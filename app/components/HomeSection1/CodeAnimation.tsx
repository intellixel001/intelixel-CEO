import styles from "./styles/HomeSection1.module.css";

export default function CodeAnimation() {
  const lines = [
    { text: "import { elegance, performance } from '@our-philosophy/core';", indent: 0, color: "text-purple-400" },
    { text: "", indent: 0, color: "" },
    { text: "const DigitalSolution = async ({ requirements, vision }) => {", indent: 0, color: "text-blue-400" },
    { text: "  try {", indent: 1, color: "text-gray-400" },
    { text: "    const architecture = await craftDesign(vision);", indent: 2, color: "text-gray-300" },
    { text: "    const implementation = await engineerSolution(architecture);", indent: 2, color: "text-gray-300" },
    { text: "    const polishedProduct = await refineExperience(implementation);", indent: 2, color: "text-gray-300" },
    { text: "    const metrics = await optimizePerformance(polishedProduct);", indent: 2, color: "text-gray-300" },
    { text: "    return deliverExcellence(metrics);", indent: 2, color: "text-gray-300" },
    { text: "  } catch (error) {", indent: 1, color: "text-gray-400" },
    { text: "    console.warn('Perfection requires iteration', error);", indent: 2, color: "text-yellow-400" },
    { text: "    return enhanceSolution(error);", indent: 2, color: "text-gray-300" },
    { text: "  }", indent: 1, color: "text-gray-400" },
    { text: "}", indent: 0, color: "text-blue-400" },
  ];

  return (
    <div className={styles.animateTyping}>
      {lines.map((line, i) => (
        <div key={i} className={`${line.color} flex`}>
          {Array(line.indent).fill(0).map((_, j) => (
            <span key={j} className="inline-block w-4"></span>
          ))}
          {line.text}
        </div>
      ))}
    </div>
  );
}