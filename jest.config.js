module.exports = {
    verbose: true, // 打印详细的测试信息
    testRegex: "/test/.+\\.(spec|test)\\.jsx?$", // 需要被测试的文件
    moduleFileExtensions: [ // 测试文件中引入模块的可能后缀
        "js",
        "jsx",
        "scss"
    ],
    moduleNameMapper: { // 代表需要被 Mock 的资源名称。如果需要 Mock 静态资源（如less、scss等），则需要配置 Mock 的路径 <rootDir>/test/mock/assets_file.js
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/test/mock/assets_file.js",
        "\\.(scss|css|less)$": "identity-obj-proxy"
    },
    transform: { // 测试过程中编译文件中的js新语法
        "^.+\\.jsx?$": "babel-jest"
    },
    setupFiles: ["<rootDir>/test/setup/setupTests.js"], // 每一个测试文件前执行前 执行的环境配置文件
    testPathIgnorePatterns: [ // 忽略该路径下的测试文件
        "/node_modules/",
        "/test/setup/",
        "/test/mock/"
    ],
    coveragePathIgnorePatterns: [ // 忽略这些目录下的测试覆盖率
        "/node_modules/",
        "/test/setup/",
        "/test/mock/"
    ]
};
