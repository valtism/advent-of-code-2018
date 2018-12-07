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
        const availableNodes = getAvailableNodes(nodes, dependencies);
        order.add(availableNodes[0]);
        dependencies = dependencies.filter(dep => !order.has(dep.dependency));
        nodes.delete(...availableNodes);
    }
    return order;
}

function getAvailableNodes(nodes, dependencies) {
    const availableNodes = [];
    for (const node of nodes) {
        if (dependencies.every(dep => node !== dep.node)) {
            availableNodes.push(node);
        }
    }
    return availableNodes.sort();
}

function part2(data, workers, duration) {
    if (!workers && !duration) {
        workers = 5;
        duration = 60;
    }
    const instructions = data.split("\n");
    let dependencies = parseDependencies(instructions);
    const nodes = getUniqueNodes(dependencies);

    for (let i = 0; ; i++) {
        const availableNodes = getAvailableNodes(nodes, dependencies);
        order.add(availableNodes[0]);
        dependencies = dependencies.filter(dep => !order.has(dep.dependency));
        nodes.delete(...availableNodes);
    }

    return 1;
}

module.exports = {
    part1: part1,
    part2: part2
};
