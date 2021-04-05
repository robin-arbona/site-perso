<table>
    <?php
    echo '<tr><th></th><th></th><th>' . implode('</th><th>', array_keys((array)$data[0])) . '</th></tr>';
    foreach ($data as $element) : ?>
        <tr>
            <td>Edit</td>
            <td>Supp</td>
            <?php foreach ($element as $key => $value) : ?>
                <td><?= $value ?></td>
            <?php endforeach; ?>
        </tr>
    <?php endforeach; ?>
</table>