<template>
    <v-card class="mx-auto" max-width="500">
        <v-card-title>John Doe</v-card-title>
        <v-card-subtitle>Limoux</v-card-subtitle>
        <v-card-text>
            <ul>
                <li><strong>First name: </strong>John</li>
                <li><strong>Last name: </strong>Doe</li>
                <li><strong>Address: </strong>221B Baker Street</li>
                <li>
                    <strong>Phone numbers: </strong>
                    <ul>
                        <li>+33 6.06.06.06.06</li>
                        <li>+33 6.01.02.03.04</li>
                    </ul>
                </li>
            </ul>
        </v-card-text>

        <v-card-actions>
            <v-btn color='primary'>Edit</v-btn>
            <v-btn color='error'>Delete</v-btn>
        </v-card-actions>
    </v-card>
</template>