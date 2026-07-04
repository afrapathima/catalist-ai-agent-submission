function generateReport() {

    const input = document.getElementById("researchInput").value.toLowerCase().trim();
    const output = document.getElementById("report");
    const loading = document.getElementById("loading");

    if (input.length === 0) {
        output.innerHTML = `<h3>No Input Detected</h3><p>Please enter research notes.</p>`;
        return;
    }

    loading.style.display = "block";
    output.innerHTML = "";

    setTimeout(() => {

        let score = 0;

        if (input.includes("complain") || input.includes("issue") || input.includes("problem")) score += 2;
        if (input.includes("urgent") || input.includes("delay") || input.includes("slow")) score += 3;
        if (input.includes("sales") || input.includes("increased") || input.includes("growth")) score += 1;
        if (input.includes("workload") || input.includes("busy") || input.includes("overload")) score += 2;
        if (input.includes("support") || input.includes("response")) score += 2;
        if (input.includes("instagram") || input.includes("traffic") || input.includes("promotion")) score += 1;

        let priority = "";
        let color = "";
        let action = "";

        if (score >= 6) {
            priority = "HIGH";
            color = "red";
            action = "ESCALATE TO HUMAN";
        } else if (score >= 3) {
            priority = "MEDIUM";
            color = "orange";
            action = "FOLLOW UP REQUIRED";
        } else {
            priority = "LOW";
            color = "green";
            action = "AUTO HANDLE";
        }

        let intent = "General";

        if (input.includes("complain") || input.includes("problem")) intent = "Complaint";
        else if (input.includes("sales") || input.includes("buy") || input.includes("interest")) intent = "Sales Lead";
        else if (input.includes("traffic") || input.includes("instagram") || input.includes("promotion")) intent = "Marketing";
        else if (input.includes("support") || input.includes("response")) intent = "Support";

        let findings = [];

        if (input.includes("delay")) findings.push("Delay issue detected");
        if (input.includes("sales")) findings.push("Sales data mentioned");
        if (input.includes("workload")) findings.push("Workload concern detected");
        if (input.includes("instagram")) findings.push("Social media activity detected");
        if (input.includes("support")) findings.push("Customer support issue detected");

        if (findings.length === 0) findings.push("General business information detected");

        let recommendations = [];

        if (priority === "HIGH") {
            recommendations.push("Immediate action required");
            recommendations.push("Escalate to management");
        }

        if (intent === "Complaint") recommendations.push("Improve customer handling");
        if (intent === "Sales Lead") recommendations.push("Follow up with client");
        if (intent === "Marketing") recommendations.push("Optimize marketing strategy");
        if (intent === "Support") recommendations.push("Improve support system");

        if (recommendations.length === 0) recommendations.push("Monitor situation");

        let humanReview = "";

        if (priority === "HIGH") humanReview = "Required";
        else if (intent === "Sales Lead") humanReview = "Recommended";
        else humanReview = "Optional";

        let confidence = Math.floor(Math.random() * 20) + 80;

        output.innerHTML = `
            <h3>AI Analysis Report</h3>
            <p><b>Intent:</b> ${intent}</p>
            <p><b>Priority:</b> <span style="color:${color}; font-weight:bold;">${priority} (Score: ${score})</span></p>
            <p><b>Action:</b> ${action}</p>
            <p><b>AI Confidence:</b> ${confidence}%</p>

            <h4>Key Findings</h4>
            <ul>${findings.map(f => `<li>${f}</li>`).join("")}</ul>

            <h4>Recommendations</h4>
            <ul>${recommendations.map(r => `<li>${r}</li>`).join("")}</ul>

            <p><b>Human Review:</b> ${humanReview}</p>
            <hr>
            <p style="color:gray;">AI Agent Simulation Prototype</p>
        `;

        loading.style.display = "none";

    }, 1200);
}