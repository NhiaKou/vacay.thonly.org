const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="/components/tl-header/shadow.css">
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/pack">Pack</a></li>
        <li><a href="/lock">Lock</a></li>
        <li><a href="/housework">Housework</a></li>
    </ul>
    <nav>
        <h3 onclick="this.getRootNode().host.menu()">Menu</h3> 
        <select onchange="this.getRootNode().host.page(this)">
            <option value="/">Home</option>
            <optgroup label="Calaveras">
                <option value="/pack/">Pack</option>
                <option value="/lock/">Lock</option>
                <option value="/housework/">Housework</option>
            </optgroup>
            <optgroup label="Lyell">
                <option value="/pack/" disabled>Pack</option>
                <option value="/lock/" disabled>Lock</option>
            </optgroup>
            <optgroup label="Long Beach">
            </optgroup>
            <optgroup label="Hawaii">
            </optgroup>
            <optgroup label="Cambodia">
            </optgroup>
            <optgroup label="Ukraine">
            </optgroup>
            <optgroup label="Mexico">
            </optgroup>
        </select>
    </nav>
`;

export default template;