function part1(data) {
    const instructions = data.split("\n");
    let dependencies = parseDependencies(instructions);
    const nodes = getUniqueNodes(dependencies);

    const order = getOrder(nodes, dependencies);
    return Array.from(order).join("");
}

function parseDependencies(instructions) {
    return instructions.map(instruction => {
        const words = instruction.split(" ");
        return {
            dependency: words[1],
            node: words[7]
        };
    });
}

function getUniqueNodes(dependencies) {
    const nodes = new Set();
    dependencies.forEach(dep => {
        nodes.add(dep.dependency);
        nodes.add(dep.node);
    });
    return nodes;
}

function getOrder(nodes, dependencies) {
    const order = new Set();
    while (nodes.size) {
        const availableNodes = [];
        for (const node of nodes) {
            if (dependencies.every(dep => node !== dep.node)) {
                availableNodes.push(node);
            }
        }
        availableNodes.sort();
        order.add(availableNodes[0]);
        dependencies = dependencies.filter(dep => !order.has(dep.dependency));
        nodes.delete(...availableNodes);
    }
    return order;
}

function part2(data) {
    return 1;
}

module.exports = {
    part1: part1,
    part2: part2
};
