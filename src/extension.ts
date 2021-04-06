// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from 'fs';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "better-pt-project-creator" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('better-p5-project-creator.helloWorld', async () => {
		let data = await vscode.window.showInputBox({
			placeHolder: "Project Name also as project folder"
		});

		
		let description = await vscode.window.showInputBox({
			placeHolder: "description of project as html title"
		})

		if (vscode.workspace.workspaceFolders && data) {
			const folder = vscode.Uri.joinPath(vscode.workspace.workspaceFolders[0].uri, data);

			const jsfile = vscode.Uri.joinPath(folder, "/sketch.js");
			const htmlfile = vscode.Uri.joinPath(folder, "/index.html");
			
			const edit = new vscode.WorkspaceEdit();
			let canGo: boolean = true;

			if (fs.existsSync(jsfile.fsPath)) {
				vscode.window.showErrorMessage("sketch.js already exists in current workspace!");
				canGo = false;
			}

			if (fs.existsSync(htmlfile.fsPath)) {
				vscode.window.showErrorMessage("index.html already exists in current workspace!");
				canGo = false;
			}
			console.log(jsfile);
			if (canGo) {
				edit.createFile(jsfile, { ignoreIfExists: true, overwrite: false });
				edit.insert(jsfile, new vscode.Position(0, 0), "function setup() \n{\n  createCanvas(800, 600);\n}\n\nfunction draw()\n{\n  background(240);\n}\n");
				
				edit.createFile(htmlfile, { ignoreIfExists: true, overwrite: false });
				if(description!==''){
					edit.insert(htmlfile, new vscode.Position(0, 0), "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n\t<meta charset=\"utf-8\">\n\t<title>" + `${description}` + "</title>\n\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js\"></script>\n\n</head>\n\n<body>\n\t<script src=\"sketch.js\"></script>\n</body>\n\n</html>\n");
				}else{
					edit.insert(htmlfile, new vscode.Position(0, 0), "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n\t<meta charset=\"utf-8\">\n\t<title>" + `${data}` + "</title>\n\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js\"></script>\n\n</head>\n\n<body>\n\t<script src=\"sketch.js\"></script>\n</body>\n\n</html>\n");
				}

				
				vscode.workspace.applyEdit(edit);

				await new Promise(resolve => setTimeout(resolve, 500));

				vscode.workspace.saveAll();

				vscode.window.showInformationMessage("Project Creation Complete");
			}
		}
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
